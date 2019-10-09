import React from "react"
import { connect } from "react-redux"

import { clearStatus } from "../../actions/status"
import { setStream, clearStream } from "../../actions/stream"

class Component extends React.Component {

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
    this.startCapture()
  }

  render() {
    return <div className="page">
      <h2>Streaming data</h2>
    </div>
  }
}

const mapStateToProps = state => ({ webSocket: state.webSocket })

const mapDispatchToProps = { clearStatus, setStream, clearStream }

export default connect(mapStateToProps, mapDispatchToProps)(Component)