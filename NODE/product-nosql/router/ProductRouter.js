const express = require("express")
const router = express.Router()
const { index, show, update, destroy, store } = require("../controller/ProductController")


router.get("/products/:id", show)
router.get("/products", index)
router.post("/products", store)
router.put("/products/:id", update)
router.delete("/products/:id", destroy)





module.exports = router