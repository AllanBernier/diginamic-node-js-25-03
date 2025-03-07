const express = require("express")
const router = require("./router/PlayerRouter")
const app = express()
require("dotenv").config()
const PORT = process.env.SERVER_PORT || 3001

app.listen(PORT, () => {
  console.log("App running on port ", PORT)
})

app.use( require("./router/PlayerRouter"))
app.use( require("./router/MatchRouter"))