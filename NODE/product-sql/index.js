const express = require("express")
const app = express()
require("dotenv").config()
const cors = require("cors")

const PORT = process.env.SERVER_PORT || 3000
const productRouter = require("./router/ProductRouter")


app.use(cors())
app.use(express.json())
app.use(productRouter)


app.use((req, res) => {
  res.status(404).json({ message: "Route non définit" })
})

app.listen(PORT, () => {
  console.log("App listening on port 3000 !")
})

