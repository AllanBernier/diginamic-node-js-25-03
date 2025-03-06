const express = require("express")
const { index, show, store, update, destroy } = require("../controller/UserController.Js")

const router = express.Router()

router.get("/users", index)
router.get("/users/:id", show)
router.post("/users", store)
router.put("/users/:id", update)
router.post("/users/:id", destroy)

module.exports = router