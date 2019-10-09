import React from "react"

import WebSocket from "./views/WebSocket"
import Login from "./views/Login"
import CaptureStream from "./views/CaptureStream"
import PlayStream from "./views/PlayStream"

export default () =>
  <main className="main" >
    <WebSocket />
    <Login />
    <CaptureStream />
    <PlayStream />
  </main>