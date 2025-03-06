const { Result } = require("express-validator")
const Product = require("../model/Product")



// const index = async (req, res) => {
//   const products = await Product.findAll()
//   res.json(products)
// }

const index = async (req, res) => {
  const page = parseInt(req.query.page) || 1
  const limit = parseInt(req.query.limit) || 10

  const offset = (page - 1) * limit

  const result = await Product.findAndCountAll({
    limit, offset
  })

  res.json({
    totalItems : result.count,
    totalPages : Math.ceil( result.count / limit ),
    page, 
    limit,
    products : result.rows
  })
}

const show = async (req, res) => {
  const id = parseInt(req.params.id)
  const product = await Product.findByPk(id)

  if (product === null) return res.status(404).json({ message: "Product not found !" })
  res.json(product)
}

const search = async (req, res) => {

  const products = await Product.findAll({
    where: {
      name: req.query.name,
    },
  });

  res.json(products)
}

const store = async (req, res) => {
  const { name, price, description, stock } = req.body

  try {
    const product = await Product.create({ name, price, description, stock })
    return res.status(201).json(product)
  } catch (error) {
    return res.status(400).json(error)
  }

}

const update = async (req, res) => {
  const id = parseInt(req.params.id)
  const { name, price, description, stock } = req.body

  const product = await Product.findByPk(id)
  if (product === null) return res.status(404).json({ message: "Product not found !" })

  const updated = await product.update({ name, price, description, stock })

  res.json(updated)
}

const destroy = async (req, res) => {
  const id = parseInt(req.params.id)
  const product = await Product.findByPk(id)
  if (product === null) return res.status(404).json({ message: "Product not found !" })

  await product.destroy()
  res.json({message : "Product deleted !"})
}


// const destroyThen = (req, res) => {
//   const id = parseInt(req.params.id)
  
//   Product.findByPk(id)
//   .then( (product) => {
//     if (product === null) return res.status(404).json({ message: "Product not found !" })

//     product.destroy()
//     .then( () => {
//       res.json({message : "Product deleted !", product})
//     })
//   })
// }




module.exports = { index, destroy, update, store, show, search }



