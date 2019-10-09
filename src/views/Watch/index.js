import React from "react"
import { connect } from "react-redux"

import Connection from "../Connection"

class Component extends React.Component {

  render() {
    return <div className="page">
      <Connection />
      <h2>Watching data</h2>
    </div>
  }
}

const mapStateToProps = state => ({
  webSocket: state.webSocket,
  hostdevice: state.hostdevice,
})

const mapDispatchToProps = {}

export default connect(mapStateToProps, mapDispatchToProps)(Component)