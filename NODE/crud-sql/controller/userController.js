const { User } = require("../model/index")

const index = async (req, res) => {
  User.findAll().then((users) => {
    res.json(users)
  })
}
const show = (req, res) => {
  const id = parseInt(req.params.id)

  User.findByPk(id)
    .then((user) => {
      res.json(user)
    })
    .catch((err) => {
      res.status(404).json({ message: "User not found !" })
    })
}
const store = (req, res) => {
  User.create(req.body)
    .then((user) => {
      res.status(201).json({ message: "User created !", user })
    })
}
const update = (req, res) => {
  const id = parseInt(req.params.id)

  User.update(req.body, { where: { id } })
    .then((user) => {
      res.json({ message: "User updated", user })
    })
}
const destroy = (req, res) => {
  const id = parseInt(req.params.id)

  User.destroy({ where : {id}})
  .then( (user) => {
    res.json({message: "User Deleted", user})
  })
}

module.exports = { index, show, store, update, destroy }