import React from "react"
import { connect } from "react-redux"

import { clearWebSocket, setWebSocket, receiveMessage }
  from "../../actions/webSocket"

class Component extends React.Component {
  state = { connection: "" }

  webSocket = {}

  connectWebSocket = () => {
    this.setState({ connection: "connecting" })
    this.webSocket = new WebSocket("ws://localhost:6789", "json")

    this.webSocket.onclose = () => {
      this.setState({ connection: "closed" })
      this.props.clearWebSocket()
    }

    this.webSocket.onerror = () => {
      this.setState({ connection: "error" })
      this.props.clearWebSocket()
    }

    this.webSocket.onmessage = msg =>
      this.props.receiveMessage(JSON.parse(msg.data))

    this.webSocket.onopen = () => {
      this.setState({ connection: "open" })
      this.props.setWebSocket(this.webSocket)
    }
  }

  componentDidMount() {
    this.connectWebSocket()
  }

  render() {
    if (this.state.connection === "connecting") {
      return <div>
        <h1>Connecting to server...</h1>
      </div>
    }

    if (this.state.connection === "closed") {
      return <div>
        <h1>The server closed the connection.</h1>
        <button onClick={this.connectWebSocket}>Reconnect</button>
      </div>
    }

    if (this.state.connection === "error") {
      return <div>
        <h1>An error occured with the server connection.</h1>
        <button onClick={this.connectWebSocket}>Reconnect</button>
      </div>
    }

    return null
  }
}

const mapStateToProps = state => ({})

const mapDispatchToProps = {
  clearWebSocket, setWebSocket, receiveMessage
}

export default connect(mapStateToProps, mapDispatchToProps)(Component)