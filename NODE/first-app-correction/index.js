const express = require("express")

const app = express()

app.listen(3000, () => {
  console.log("App running on port 3000")
})


app.get("/hello-world", (req, res) => {
  res.send("<h1>Hello !</h1>")
})

app.get("/json-response", (req, res) => {
  res.json({ user : {
    name : "Jhon",
    surname: "Doe",
    age: 45
  }})
})

app.get("/get-file", (req, res) => {
  res.sendFile("/home/allan/git/diginamic-node-js-25-03/NODE/first-app-correction/package.json")
})

app.get("/url/:id", (req, res) => {
  const id = req.params.id

  res.send("Fetching users at id : " + id )
})

app.get("/query", (req, res) => {
  const name = req.query.name

  if (name === undefined){
    return res.status(400).send("Name not provided")
  }

  res.send("Hello from " + name )
})

