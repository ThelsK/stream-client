import React from "react"
import { connect } from "react-redux"

import { clearSignal } from "../actions/signal"
import { setStream } from "../actions/stream"

class Component extends React.Component {
  connections = []

  componentDidMount() {
    if (this.props.hostdevice) {

      // Start a new connection.
      const connection = new RTCPeerConnection({
        iceServers: [
          // {
          //   urls: [
          //     "stun:stun3.1.google.com:19302",
          //     "stun:stun4.1.google.com:19302",
          //   ],
          // },
        ],
      })

      // Store the linked username in the connection.
      connection.otherDevicename = this.props.hostdevice

      // Handle incoming stream.
      connection.onaddstream = event => {
        console.log("Add Stream:", event)
        this.props.setStream(event.stream)
      }

      // Send outgoing stream.
      // connection.addStream(this.props.stream)

      // Handle ICE candidates.
      connection.onicecandidate = event => {
        console.log("ICE Candidate:", event)
        if (event.candidate) {
          this.props.webSocket.send(JSON.stringify({
            type: "target", target: connection.otherDevicename,
            payload: { type: "candidate", candidate: event.candidate }
          }))
        }
      }

      // Establish a connection offer.
      connection.createOffer(offer => {
        connection.setLocalDescription(offer)
        this.props.webSocket.send(JSON.stringify({
          type: "target", target: connection.otherDevicename,
          payload: { type: "offer", offer }
        }))
      }, console.error, { offerToReceiveVideo: true })

      // Add the connection to the list of connections.
      this.connections.push(connection)
    }
  }

  componentDidUpdate() {
    if (!this.props.signal.type) {
      return
    }
    console.log("Signal found.")

    // Find the connection to this device.
    let connection = this.connections.find(conn =>
      conn.otherDevicename === this.props.signal.senderDevicename)

    // If no connection exists, start a new connection.
    if (!connection) {
      connection = new RTCPeerConnection({
        iceServers: [{
          urls: [
            "stun:stun3.l.google.com:19302",
            "stun:stun4.l.google.com:19302",
          ],
        },],
      })

      // Store the linked username in the connection.
      connection.otherDevicename = this.props.signal.senderDevicename

      // Handle incoming stream.
      connection.onaddstream = event => {
        console.log("Add Stream:", event)
        this.props.setStream(event.stream)
      }

      // Send outgoing stream.
      connection.addStream(this.props.stream)

      // Handle ICE candidates.
      connection.onicecandidate = event => {
        console.log("ICE Candidate:", event)
        if (event.candidate) {
          this.props.webSocket.send(JSON.stringify({
            type: "target", target: connection.otherDevicename,
            payload: { type: "candidate", candidate: event.candidate }
          }))
        }
      }

      // Add the connection to the list of connections.
      this.connections.push(connection)
    }

    switch (this.props.signal.type) {

      case "offer":
        console.log("Received offer")
        connection.setRemoteDescription(new RTCSessionDescription(
          this.props.signal.offer))
        connection.createAnswer(answer => {
          connection.setLocalDescription(answer)
          this.props.webSocket.send(JSON.stringify({
            type: "target", target: connection.otherDevicename,
            payload: { type: "answer", answer }
          }))
        }, console.error)
        this.props.clearSignal()
        console.log("Connection:", connection)
        return

      case "answer":
        console.log("Received answer")
        connection.setRemoteDescription(new RTCSessionDescription(
          this.props.signal.answer))
        this.props.clearSignal()
        console.log("Connection:", connection)
        return

      case "candidate":
        connection.addIceCandidate(new RTCIceCandidate(
          this.props.signal.candidate))
        this.props.clearSignal()
        return

      default:
        console.error("Unknown data:", this.props.signal)
        this.props.clearSignal()
    }
  }

  render() {
    return null
  }
}

const mapStateToProps = state => ({
  webSocket: state.webSocket,
  stream: state.stream,
  hostdevice: state.hostdevice,
  signal: state.signal,
})

const mapDispatchToProps = { clearSignal, setStream }

export default connect(mapStateToProps, mapDispatchToProps)(Component)