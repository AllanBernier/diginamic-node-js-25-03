const router = require("express").Router() 
const { index, show, store, update, destroy } = require("../controller/PlayerController")

router.get("/player", index )
router.get("/player/:id", show)
router.post("/player", store)
router.put("/player/:id", update)
router.delete("/player/:id", destroy)

module.exports = router
