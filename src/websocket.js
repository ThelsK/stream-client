

const connection = new WebSocket("ws://localhost:6789", "json")
connection.onopen = () => {
  console.log("Websocket connection established")
}
