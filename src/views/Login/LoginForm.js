import React from "react"
import { connect } from "react-redux"

import Label from "./Label"

class Component extends React.Component {
  state = { username: "", password: "" }

  onChange = event =>
    this.setState({ [event.target.name]: event.target.value })

  onSubmit = event => {
    event.preventDefault()
    this.props.webSocket.send(JSON.stringify({
      ...this.state, type: "login",
    }))
  }

  render() {
    return <form className="form" onSubmit={this.onSubmit}>
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
      <div className="buttonbox">
        <button className="button">Log in</button>
      </div>
    </form >
  }
}

const mapStateToProps = state => ({ webSocket: state.webSocket })

const mapDispatchToProps = {}

export default connect(mapStateToProps, mapDispatchToProps)(Component)