import React from "react"

export default props =>
  <button className="button wide" name={props.devicename}
    onClick={props.watch}>{props.devicename}</button>