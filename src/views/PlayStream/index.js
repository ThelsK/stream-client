import React from "react"
import { connect } from "react-redux"

class Component extends React.Component {
  videoRef = React.createRef()

  componentDidMount() {
    this.videoRef.current.srcObject = this.props.stream
  }

  componentDidUpdate() {
    this.videoRef.current.srcObject = this.props.stream
  }

  render() {
    return <div className="PlayStream">
      <video className="video" ref={this.videoRef} autoPlay controls />
    </div>
  }
}

const mapStateToProps = state => ({ stream: state.stream })

const mapDispatchToProps = {}

export default connect(mapStateToProps, mapDispatchToProps)(Component)