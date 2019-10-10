import React from "react"
import { connect } from "react-redux"

import ListEntry from "./ListEntry"
import { setStatus } from "../../actions/status"
import { setHostdevice } from "../../actions/hostdevice"

class Component extends React.Component {

  watch = event => {
    this.props.setHostdevice(event.target.name)
    this.props.setStatus("watching")
  }

  render() {
    if (!this.props.streams.length) {
      return <div className="column">
        <h2 className="textlarge">Watch</h2>
        <p>None of your devices are currently broadcasting.</p>
      </div>
    }

    return <div className="column">
      <h2 className="textlarge">Watch</h2>
      {this.props.streams.map((stream, index) =>
        <ListEntry key={index} devicename={stream} watch={this.watch} />
      )}
    </div>
  }
}

const mapStateToProps = state => ({ streams: state.streams })

const mapDispatchToProps = { setStatus, setHostdevice }

export default connect(mapStateToProps, mapDispatchToProps)(Component)