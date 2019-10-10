import React from "react"

export default props =>
  <div className="column">
    <h2 className="textlarge">
      An error occurred with the server connection.
    </h2>
    <button className="button" onClick={props.reconnect}>
      Reconnect
    </button>
  </div >