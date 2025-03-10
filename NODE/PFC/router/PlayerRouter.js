const router = require("express").Router()
const { index, show, store, update, destroy, getPlayerTournaments, addAvatar } = require("../controller/PlayerController")

const playerRequest = require("../middleware/formRequest/PlayerRequest")



router.get("/player", index)
router.get("/player/:id", show)
router.get("/player/:id/tournaments", getPlayerTournaments)

router.post("/player", store)
router.post("/player/:id/avatar", playerRequest, addAvatar)

router.put("/player/:id", playerRequest, update)

router.delete("/player/:id", destroy)

module.exports = router

