import React from "react"

import WebSocket from "./views/WebSocket"
import CaptureStream from "./views/CaptureStream"
import PlayStream from "./views/PlayStream"

export default () =>
  <main className="main" >
    <WebSocket />
    <CaptureStream />
    <PlayStream />
  </main>