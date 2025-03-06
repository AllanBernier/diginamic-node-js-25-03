const Product = require("../model/Product")


// const index = (req, res) => {
//   Product.find()
//     .then((products) => res.json(products))
//     .catch((err) => res.json(err))
// }


const index = async (req, res) => {
  const page = parseInt(req.params.page) || 1
  const limit = parseInt(req.params.limit) || 10
  const offset = (page - 1) * limit

  try {
    const [count, products] = await Promise.all([
      Product.countDocuments(),
      Product.find().skip(offset).limit(limit)
    ])

    res.json({ page, limit, count, products })
  } catch (err) {
    res.status(500).json(err)
  }
}



const show = (req, res) => {
  const { id } = req.params

  Product.findById(id)
  .then( (product) => res.json(product) )
  .catch( (err) => res.status(400).json(err) )

}
const update = (req, res) => { 
  const { id } = req.params

  Product.findByIdAndUpdate(id, req.body)
  .then( (product) => res.json(product))
  .catch( (err) => res.status(400).json(err) )
}
const destroy = (req, res) => { 
  const { id } = req.params

  Product.findByIdAndDelete(id)
  .then( (product) => res.json(product))
  .catch( (err) => res.status(400).json(err) )
}

const store = (req, res) => { 
  Product.create(req.body)
  .then( (product) => res.status(201).json(product))
  .catch( (err) => res.status(400).json(err) )
}

module.exports = { index, show, update, destroy, store }