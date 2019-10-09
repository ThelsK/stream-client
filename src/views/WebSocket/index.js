import React from "react"
import { connect } from "react-redux"

import { clearWebSocket, setWebSocket, receiveMessage, receiveError }
  from "../../actions/webSocket"

class Component extends React.Component {
  webSocket = {}

  connectWebSocket = () =>
    this.webSocket = new WebSocket("ws://localhost:6789", "json")

  sendWebSocketData = data => this.webSocket.send(JSON.stringify(data))

  componentDidMount() {
    this.connectWebSocket()

    this.webSocket.onclose = () =>
      this.props.clearWebSocket()

    this.webSocket.onopen = () =>
      this.props.setWebSocket(this.webSocket)

    this.webSocket.onmessage = msg =>
      this.props.receiveMessage(JSON.parse(msg.data))

    this.webSocket.onerror = error =>
      this.props.receiveError(error)
  }

  render() {
    return null
  }
}

const mapStateToProps = state => ({})

const mapDispatchToProps = {
  clearWebSocket, setWebSocket, receiveMessage, receiveError
}

export default connect(mapStateToProps, mapDispatchToProps)(Component)