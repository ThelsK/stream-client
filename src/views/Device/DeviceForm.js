import React from "react"
import { connect } from "react-redux"

import Label from "../Label"

class Component extends React.Component {
  state = { devicename: "" }

  onChange = event =>
    this.setState({ [event.target.name]: event.target.value })

  onSubmit = event => {
    event.preventDefault()
    this.props.webSocket.send(JSON.stringify({
      ...this.state, type: "device",
    }))
  }

  render() {
    return <form className="column" onSubmit={this.onSubmit}>
      <h2 className="textlarge">Device</h2>
      <p>Please provide a simple name for this device.</p>
      <p>The name must be unique among your connected devices.</p>
      <p>This will help you to determine which device to watch.</p>
      <Label
        text="Devicename:"
        type="text"
        name="devicename"
        placeholder="Enter devicename..."
        value={this.state.devicename}
        minLength={3}
        maxLength={24}
        required={true}
        onChange={this.onChange}
      />
      <button className="button">Submit</button>
    </form >
  }
}

const mapStateToProps = state => ({ webSocket: state.webSocket })

const mapDispatchToProps = {}

export default connect(mapStateToProps, mapDispatchToProps)(Component)