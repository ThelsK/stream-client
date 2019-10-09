import React from "react"
import { connect } from "react-redux"

import Login from "../Login"
import Device from "../Device"
import Overview from "../Overview"
import Stream from "../Stream"
import Watch from "../Watch"

class Component extends React.Component {

  render() {

    if (!this.props.webSocket) {
      return null
    }

    if (!this.props.username) {
      return <Login />
    }

    if (!this.props.devicename) {
      return <Device />
    }

    switch (this.props.status) {
      case "streaming":
        return <Stream />
      case "watching":
        return <Watch />
      default:
        return <Overview />
    }
  }
}

const mapStateToProps = state => ({
  webSocket: state.webSocket,
  username: state.username,
  devicename: state.devicename,
  status: state.status,
})

const mapDispatchToProps = {}

export default connect(mapStateToProps, mapDispatchToProps)(Component)