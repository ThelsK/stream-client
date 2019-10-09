import { combineReducers } from "redux"

import user from "./user"
import stream from "./stream"

export default combineReducers({
  user, stream,
})