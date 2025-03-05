const express = require("express")
const router = express.Router()
const { index, destroy, update, store, validateProduct, getById, search } = require("../controller/ProductController")


router.get("/products/search", search)
router.get("/products/:id", getById)
router.get("/products", index)

router.post("/products", validateProduct, store)

router.put("/products/:id", validateProduct, update)

router.delete("/products/:id", destroy)



module.exports = router