import React from "react"

class Component extends React.Component {
  videoRef = React.createRef()

  state = {
    stream: undefined,
  }

  startCapture = async () => {
    try {
      this.setState({
        stream: await navigator.mediaDevices.getDisplayMedia({})
      })

    } catch (error) {
      console.error(error)
    }
  }

  stopCapture = async () => {

  }

  componentDidMount() {
    this.videoRef.current.srcObject = this.state.stream
  }

  componentDidUpdate() {
    this.videoRef.current.srcObject = this.state.stream
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

export default Component