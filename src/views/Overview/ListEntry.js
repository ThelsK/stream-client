import React from "react"

export default props =>
  <div className={"entry"}>
    <h2 className="textlarge">
      {props.devicename}
    </h2>
    <button name={props.devicename} onClick={props.watch}>
      Watch
    </button>
  </div>