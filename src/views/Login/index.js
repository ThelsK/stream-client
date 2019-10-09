import React from "react"
import { connect } from "react-redux"

import LoginForm from "./LoginForm"
import RegisterForm from "./RegisterForm"

class Component extends React.Component {

  render() {
    if (!this.props.webSocket) {
      return null
    }

    if (!this.props.username) {
      return <div className="loginpage">
        <LoginForm />
        <RegisterForm />
      </div>
    }

    return null
  }
}

const mapStateToProps = state => ({
  webSocket: state.webSocket, username: state.username
})

const mapDispatchToProps = {}

export default connect(mapStateToProps, mapDispatchToProps)(Component)