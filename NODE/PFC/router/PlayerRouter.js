const router = require("express").Router() 
const { index, show, store, update, destroy, getPlayerTournaments, addAvatar } = require("../controller/PlayerController")

router.get("/player", index )
router.get("/player/:id", show)
router.get("/player/:id/tournaments", getPlayerTournaments)

router.post("/player", store)
router.post("/player/:id/avatar", addAvatar)

router.put("/player/:id", update)

router.delete("/player/:id", destroy)

module.exports = router

