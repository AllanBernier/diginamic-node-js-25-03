const router = require("express").Router()
const { playAgainstComputer } = require("../controller/MatchController")



router.post("/matchs", playAgainstComputer)

module.exports = router