const router = require("express").Router()
const { playAgainstComputer, getPlayerMatchs, getLeaderboard } = require("../controller/MatchController")


router.get('/matchs/player/:id', getPlayerMatchs)
router.get('/matchs/leaderboard', getLeaderboard)
router.post("/matchs/:playerId", playAgainstComputer)


module.exports = router