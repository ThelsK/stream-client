import React from "react"
import { connect } from "react-redux"

import Connection from "../Connection"
import { clearHostdevice } from "../../actions/hostdevice"
import { clearStatus } from "../../actions/status"

class Component extends React.Component {
  videoRef = React.createRef()

  componentDidMount() {
    this.videoRef.current.srcObject = this.props.stream
  }

  componentDidUpdate() {
    this.videoRef.current.srcObject = this.props.stream
  }

  stopWatching = () => {
    this.props.webSocket.send(JSON.stringify({
      type: "status", status: "",
    }))
    this.props.clearHostdevice()
    this.props.clearStatus()
  }

  render() {
    return <div className="column">
      <h2 className="textlarge">Watching {this.props.hostdevice}</h2>
      <button className="button" onClick={this.stopWatching}
      >Stop</button>
      <Connection />
      <video className="video" ref={this.videoRef} autoPlay controls />
    </div>
  }
}

const mapStateToProps = state => ({
  webSocket: state.webSocket,
  hostdevice: state.hostdevice,
  stream: state.stream,
})

const mapDispatchToProps = { clearHostdevice, clearStatus }

export default connect(mapStateToProps, mapDispatchToProps)(Component)