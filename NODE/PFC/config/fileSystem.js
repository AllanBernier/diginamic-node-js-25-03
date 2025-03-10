const express = require("express")
const Router = express.Router()
const fileUpload = require("express-fileupload")

Router.use(fileUpload({
  limits : { fileSize : 50 * 1024 * 1024 }
}))

Router.use("/public/images/", express.static("./public/images"))

module.exports = Router