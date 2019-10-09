import { combineReducers } from "redux"

import message from "./message"
import webSocket from "./webSocket"
import username from "./username"
import devicename from "./devicename"
import streams from "./streams"
import status from "./status"
import hostdevice from "./hostdevice"
import signal from "./signal"
import stream from "./stream"

export default combineReducers({
  message, webSocket, username, devicename, streams, status,
  hostdevice, signal, stream,
})