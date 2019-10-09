import React from "react"
import { connect } from "react-redux"

import Connecting from "./Connecting"
import Closed from "./Closed"
import Error from "./Error"
import { baseUrl } from "../../settings"
import { clearWebSocket, setWebSocket, receiveMessage }
  from "../../actions/webSocket"

class Component extends React.Component {
  state = { status: "new" }

  webSocket = {}

  connectWebSocket = () => {
    this.props.clearWebSocket()
    this.setState({ status: "connecting" })
    this.webSocket = new WebSocket(baseUrl, "json")

    this.webSocket.onclose = () => {
      this.props.clearWebSocket()
      this.setState({ status: "closed" })
    }

    this.webSocket.onerror = () => {
      this.props.clearWebSocket()
      this.setState({ status: "error" })
    }

    this.webSocket.onmessage = msg =>
      this.props.receiveMessage(JSON.parse(msg.data))

    this.webSocket.onopen = () => {
      this.setState({ status: "open" })
      this.props.setWebSocket(this.webSocket)
    }
  }

  componentDidMount() {
    this.connectWebSocket()
  }

  render() {
    switch (this.state.status) {
      case "connecting":
        return <Connecting reconnect={this.connectWebSocket} />
      case "closed":
        return <Closed reconnect={this.connectWebSocket} />
      case "error":
        return <Error reconnect={this.connectWebSocket} />
      default:
        return null
    }
  }
}

const mapStateToProps = state => ({})

const mapDispatchToProps = {
  clearWebSocket, setWebSocket, receiveMessage
}

export default connect(mapStateToProps, mapDispatchToProps)(Component)