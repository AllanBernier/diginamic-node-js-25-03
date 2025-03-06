const express = require("express")
const mongoose = require("mongoose")
require("dotenv").config()

const PORT = process.env.SERVER_PORT || 3000
const app = express()

app.use(express.json())

mongoose.connect(process.env.DB_URL)
.then( () => {
  console.log("Connected")

  app.listen(PORT, () => {
    console.log("App listening on port " + PORT)
  })

})
.catch( (err) => {
  console.log(err)
})


app.use(require("./router/ProductRouter"))
