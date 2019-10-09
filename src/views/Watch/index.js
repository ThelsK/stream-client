import React from "react"
import { connect } from "react-redux"

import Connection from "../Connection"

class Component extends React.Component {
  videoRef = React.createRef()

  componentDidMount() {
    this.videoRef.current.srcObject = this.props.stream
  }

  componentDidUpdate() {
    this.videoRef.current.srcObject = this.props.stream
  }

  render() {
    return <div className="page">
      <Connection />
      <h2>Watching data</h2>
      <video className="video" ref={this.videoRef} autoPlay controls />
    </div>
  }
}

const mapStateToProps = state => ({
  webSocket: state.webSocket,
  hostdevice: state.hostdevice,
  stream: state.stream,
})

const mapDispatchToProps = {}

export default connect(mapStateToProps, mapDispatchToProps)(Component)