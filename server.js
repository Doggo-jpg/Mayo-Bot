const express = require("express")
const server = express()

server.all("/", (req, res) => {
  res.send("Mayo-bot esta corriendo")
})


function keepAlive() {
  server.listen(3000, () =>{
    console.log("Server esta listo.")
  } )
}

module.exports = keepAlive