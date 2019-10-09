import React from "react"
import { connect } from "react-redux"

import Connection from "../Connection"
import { clearStatus } from "../../actions/status"
import { setStream, clearStream } from "../../actions/stream"

class Component extends React.Component {
  videoRef = React.createRef()

  startCapture = async () => {
    try {
      const stream = await navigator.mediaDevices.getDisplayMedia({})
      this.props.setStream(stream)
      this.props.webSocket.send(JSON.stringify({
        type: "status", status: "streaming",
      }))
    } catch (error) {
      console.error(error)
      this.props.webSocket.send(JSON.stringify({
        type: "status", status: "",
      }))
      this.props.clearStatus()
    }
  }

  componentDidMount() {
    this.videoRef.current.srcObject = this.props.stream
    this.startCapture()
  }
  componentDidUpdate() {
    this.videoRef.current.srcObject = this.props.stream
  }

  render() {
    return <div className="page">
      <Connection />
      <h2>Streaming data</h2>
      <video className="video" ref={this.videoRef} autoPlay controls />
    </div>
  }
}

const mapStateToProps = state => ({
  stream: state.stream, webSocket: state.webSocket
})

const mapDispatchToProps = { clearStatus, setStream, clearStream }

export default connect(mapStateToProps, mapDispatchToProps)(Component)