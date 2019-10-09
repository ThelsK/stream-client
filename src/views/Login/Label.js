import React from "react"

export default props => {
  return <label className={"label"}>
    {props.text}
    <input
      className={"input"}
      type={props.type}
      name={props.name}
      placeholder={props.placeholder}
      value={props.value}
      minLength={props.minLength}
      maxLength={props.maxLength}
      required={props.required}
      onChange={props.onChange}
    />
  </label>
}