const express = require("express")
const app = express()
require("dotenv").config()
const PORT = process.env.SERVER_PORT || 3001


const mongoose = require("mongoose")


mongoose.connect(process.env.DB_URL)
  .then((result) => {
    app.listen(PORT, () => {
      console.log(`App running on port ${PORT} !`)
    })
  })
  .catch((err) => {
    console.log("Erreur /!\\ :", err)
  })

