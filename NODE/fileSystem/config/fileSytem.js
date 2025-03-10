const fileUpload = require("express-fileupload")
const express = require("express")
const Router = express.Router()

// config/fileSystem.js
Router.use(fileUpload({
  limits : { fileSize : 50 * 1024 * 1024 }
}))
const baseUrl = __dirname + "/public/images/"

Router.use("/public/images", express.static(baseUrl))

module.exports = Router