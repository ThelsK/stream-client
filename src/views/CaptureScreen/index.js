import React from "react"
import { connect } from "react-redux"

import { setStream, clearStream } from "../../actions/stream"

class Component extends React.Component {
  videoRef = React.createRef()

  startCapture = async () => {
    try {
      this.props.setStream(await navigator.mediaDevices.getDisplayMedia({}))

    } catch (error) {
      console.error(error)
    }
  }

  stopCapture = async () => {

  }

  componentDidMount() {
    this.videoRef.current.srcObject = this.props.stream
  }

  componentDidUpdate() {
    this.videoRef.current.srcObject = this.props.stream
  }

  render() {

    return <div className="CaptureScreen">
      <button className="button" onClick={this.startCapture}>
        Start Capture
      </button>
      <button className="button" onClick={this.stopCapture}>
        Stop Capture
      </button>
      <video className="video" ref={this.videoRef} autoPlay controls />
    </div>
  }
}

const mapStateToProps = state =>
  ({ stream: state.stream })

const mapDispatchToProps = { setStream, clearStream }

export default connect(mapStateToProps, mapDispatchToProps)(Component)