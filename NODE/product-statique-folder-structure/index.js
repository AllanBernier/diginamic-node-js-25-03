const express = require("express")
const app = express()
const productRouter = require("./router/ProductRouter")

app.use(express.json())
app.use(productRouter)


app.use( (req, res) => {
  res.status(404).json({ message : "Route non définit"})
})

app.listen(3000, () => {
  console.log("App listening on port 3000 !")
})

