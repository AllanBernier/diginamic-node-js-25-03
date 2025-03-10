const express = require("express")
const app = express()
app.listen(3000, () => console.log("App running on port 3000 !"))

app.use(require("./config/fileSytem"))


// controller/playerController.js
app.post('/upload', (req, res) => {

  if (! req.files) return res.status(400).json({message : "File not found "})
  
  const timestamp = Date.now()
  const imageName = req.files.image.name

  const path = `${baseUrl}/${timestamp}_${imageName}`

  req.files.image.mv( path, (err) => {
    if (err) return console.log(err)
    res.json({message : "File uploaded !"})
  })
})

