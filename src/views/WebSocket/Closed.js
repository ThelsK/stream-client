import React from "react"

export default props =>
  <div className="column">
    <h2 className="textlarge">
      The server has closed the connection.
    </h2>
    <button onClick={props.reconnect}>
      Reconnect
    </button>
  </div>