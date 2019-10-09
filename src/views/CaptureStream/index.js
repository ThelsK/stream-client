import React from "react"
import { connect } from "react-redux"

import { setStream, clearStream } from "../../actions/stream"

class Component extends React.Component {

  startCapture = async () => {
    try {
      this.props.setStream(await navigator.mediaDevices.getDisplayMedia({}))

    } catch (error) {
      console.error(error)
    }
  }

  stopCapture = async () => {

  }

  render() {
    return <div className="CaptureStream">
      <button className="button" onClick={this.startCapture}>
        Start Capture
      </button>
      <button className="button" onClick={this.stopCapture}>
        Stop Capture
      </button>
    </div>
  }
}

const mapStateToProps = state => ({})

const mapDispatchToProps = { setStream, clearStream }

export default connect(mapStateToProps, mapDispatchToProps)(Component)