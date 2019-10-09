// Create a websocket.
const webSocket = new WebSocket("ws://localhost:6789", "json")

// Send data over the websocket.
const sendData = data => webSocket.send(JSON.stringify(data))

// The websocket has been established.
webSocket.onopen = () => {
  console.log("Websocket connection established")
  sendData("Hello World!")
}

// An error occurs with the websocket.
webSocket.onerror = error => {
  console.error(error)
}

// Data is received over the websocket.
webSocket.onmessage = msg => {
  const data = JSON.parse(msg.data)
  console.log("Received data:", data)
}

