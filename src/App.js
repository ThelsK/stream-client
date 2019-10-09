import React from "react"

import CaptureStream from "./views/CaptureStream"
import PlayStream from "./views/PlayStream"
import { } from "./websocket"

export default () =>
  <main className="main" >
    <CaptureStream />
    <PlayStream />
  </main>