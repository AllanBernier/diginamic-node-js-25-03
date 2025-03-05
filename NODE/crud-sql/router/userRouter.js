const express = require("express")
const { hello, goodbye } = require("../controller/userController")

const router = express.Router()


router.get("/hello", hello)
router.get("/good-bye/:id", goodbye)




module.exports = router