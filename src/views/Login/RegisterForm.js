import React from "react"
import { connect } from "react-redux"

import Label from "../Label"

class Component extends React.Component {
  state = { username: "", password: "", confirmPassword: "" }

  onChange = event =>
    this.setState({ [event.target.name]: event.target.value })

  onSubmit = event => {
    event.preventDefault()
    this.props.webSocket.send(JSON.stringify({
      ...this.state, type: "register",
    }))
  }

  render() {
    return <form className="column" onSubmit={this.onSubmit}>
      <h2 className="textlarge">Register</h2>
      <Label
        text="Username:"
        type="text"
        name="username"
        placeholder="Enter username..."
        value={this.state.username}
        minLength={3}
        maxLength={24}
        required={true}
        onChange={this.onChange}
      />
      <Label
        text="Password:"
        type="password"
        name="password"
        placeholder="Enter password..."
        value={this.state.password}
        minLength={8}
        maxLength={100}
        required={true}
        onChange={this.onChange}
      />
      <Label
        text="Confirm password:"
        type="password"
        name="confirmPassword"
        placeholder="Confirm password..."
        value={this.state.confirmPassword}
        minLength={8}
        maxLength={100}
        required={true}
        onChange={this.onChange}
      />
      <div className="buttonbox">
        <button className="button">Register</button>
      </div>
    </form >
  }
}

const mapStateToProps = state => ({ webSocket: state.webSocket })

const mapDispatchToProps = {}

export default connect(mapStateToProps, mapDispatchToProps)(Component)