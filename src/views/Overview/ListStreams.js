import React from "react"
import { connect } from "react-redux"

import ListEntry from "./ListEntry"

class Component extends React.Component {

  watch = event =>
    console.log("Watching:", [event.target.name])

  render() {
    return <div className="column">
      <h2>Streaming devices:</h2>
      {this.props.streams.map((stream, index) =>
        <ListEntry key={index} devicename={stream} watch={this.watch} />
      )}
    </div>
  }
}

const mapStateToProps = state => ({ streams: state.streams })

const mapDispatchToProps = {}

export default connect(mapStateToProps, mapDispatchToProps)(Component)