
const User = require("../model/User")


const index = (req, res) => {


}

const show = (req, res) => {
  const { id } = req.params

  User.findById(id)
    .then((u) => res.json(u))
    .catch((err) => res.status(404).json(err))
}
const store = (req, res) => {

}

const update = (req, res) => {

}

const destroy = (req, res) => {

}


module.exports = { index, show, update, destroy, store }