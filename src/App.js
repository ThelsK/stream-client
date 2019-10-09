import React from "react"

import WebSocket from "./views/WebSocket"
import Display from "./views/Display"
import Message from "./views/Message"

export default () =>
  <main className="main" >
    <WebSocket />
    <Display />
    <Message />
  </main>