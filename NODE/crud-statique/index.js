const express = require("express")
const app = express()

app.use(express.json())

app.listen(3000, () => {
  console.log("App running on port 3000")
})


const Users = [
  { id: 1, name: "Jean", age: 25, email: "jean@email.com" },
  { id: 2, name: "Marie", age: 30, email: "marie@email.com" },
  { id: 3, name: "Pierre", age: 35, email: "pierre@email.com" },
  { id: 4, name: "Sophie", age: 28, email: "sophie@email.com" },
  { id: 5, name: "Lucas", age: 32, email: "lucas@email.com" },
  { id: 6, name: "Emma", age: 27, email: "emma@email.com" },
  { id: 7, name: "Thomas", age: 40, email: "thomas@email.com" },
  { id: 8, name: "Julie", age: 29, email: "julie@email.com" },
  { id: 9, name: "Nicolas", age: 33, email: "nicolas@email.com" },
  { id: 10, name: "Sarah", age: 31, email: "sarah@email.com" }
]
let maxId = 10


app.get("/users/:id", (req, res) => {
  const id = parseInt(req.params.id)

  const user = Users.find( (user) => user.id === id)

  if (user){
    res.json(user)
  } else {
    res.status(404).json({message : "User not found !"})
  }
})

app.get("/users", (req, res) => {
  res.json(Users)
})

app.post("/users", (req, res) => {
  const user = req.body
  user.id = ++maxId

  Users.push(user)

  res.status(201).json(user)
})


app.put("/users/:id", (req, res) => {
  const id = parseInt(req.params.id)
  const user = { ... req.body, id }

  const index = Users.findIndex( (u) => u.id === id)

  if (index === -1){
    return res.status(404).json({message : "User not found !"})
  }
  Users[index] = user

  res.json(user)
})

app.delete("/users/:id", (req, res) => {
  const id = parseInt(req.params.id)
  const index = Users.findIndex( (u) => u.id === id)

  if (index === -1){
    return res.status(404).json({message : "User not found !"})
  }

  Users.splice(index, 1)

  res.json({message : "User deleted !"})
})





// Products : id, nom, description, prix, stock