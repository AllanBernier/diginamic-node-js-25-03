const Router = require("express").Router()

const { index, show, update, create, destroy, getTournamentPlayers, addPlayerToTournament, removePlayerFromTournament } = require("../controller/TournamentController")
const TournamentValidator = require("../middleware/formRequest/TournamentRequest")

Router.get("/tournaments", index)
Router.get("/tournaments/:id", show)
Router.post("/tournaments", TournamentValidator, create)
Router.put("/tournaments/:id", TournamentValidator, update)
Router.delete("/tournaments/:id", destroy)

Router.get("/tournaments/:id/player", getTournamentPlayers)

Router.post("/tournaments/:id/player/:playerId", addPlayerToTournament)
Router.delete("/tournaments/:id/player/:playerId", removePlayerFromTournament)

module.exports = Router