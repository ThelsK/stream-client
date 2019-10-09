import React from "react"
import { connect } from "react-redux"

import { setStatus } from "../../actions/status"

class Component extends React.Component {

  start = () =>
    this.props.setStatus("streaming")

  render() {
    return <div className="column">
      <h2>Stream from this device:</h2>
      <button onClick={this.start}>
        Start
      </button>
    </div>
  }
}

const mapStateToProps = state => ({ streams: state.streams })

const mapDispatchToProps = { setStatus }

export default connect(mapStateToProps, mapDispatchToProps)(Component)