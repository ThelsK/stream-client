import React from "react"
import { connect } from "react-redux"

import Login from "../Login"
import Device from "../Device"
import CaptureStream from "../CaptureStream"
import PlayStream from "../PlayStream"

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
    return null
  }
}

const mapStateToProps = state => ({
  webSocket: state.webSocket,
  username: state.username,
  devicename: state.devicename,
})

const mapDispatchToProps = {}

export default connect(mapStateToProps, mapDispatchToProps)(Component)