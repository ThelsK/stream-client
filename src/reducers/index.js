import { combineReducers } from "redux"

import webSocket from "./webSocket"
import stream from "./stream"

export default combineReducers({
  webSocket, stream,
})