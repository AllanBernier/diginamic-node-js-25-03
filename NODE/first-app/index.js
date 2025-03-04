// $npm init
// $npm install express
// $npm run dev

const express = require("express")

const app = express()


app.listen(3000, () => {
  console.log("App Running on port 3000")
})

app.get("/hello-world", (req, res) => {
  res.send("Hello world !")
})