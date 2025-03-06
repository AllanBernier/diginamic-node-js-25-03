const express = require("express")
const router = express.Router()
const { index, destroy, update, store, show, search } = require("../controller/ProductController")
const validateProduct = require("../middleware/formRequest/ProductFormRequest")

router.get("/products/search", search)
router.get("/products/:id", show)
router.get("/products", index)
router.post("/products",validateProduct,  store)
router.put("/products/:id",validateProduct, update)
router.delete("/products/:id", destroy)

module.exports = router