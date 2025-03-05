
const Products = [
  { id: 1, nom: "Ordinateur portable", description: "Laptop haute performance", prix: 999.99, stock: 50 },
  { id: 2, nom: "Smartphone", description: "Téléphone dernière génération", prix: 699.99, stock: 100 },
  { id: 3, nom: "Casque audio", description: "Casque bluetooth sans fil", prix: 149.99, stock: 75 },
  { id: 4, nom: "souris", description: "Tablette tactile 10 pouces", prix: 299.99, stock: 30 },
  { id: 5, nom: "Souris", description: "Smartwatch avec GPS", prix: 199.99, stock: 45 }
]
let maxId = 5

const search = (req, res) => {
  const {name} = req.query
  const products = Products.filter( (p) => p.nom.toLowerCase() === name.toLowerCase())
  res.json(products)
}

const getById = (req, res) => {
  const id = parseInt(req.params.id)
  const product = Products.find( (p) => p.id === id)

  if (!product){
    return res.status(404).json({message : "Product not found !"})
  }

  res.json(product)
}


const validateProduct = (req, res, next) => {
  const { name, price, description, stock } = req.body

  if (!name || typeof name !== 'string' || name.length === 0) 
    return res.status(400).json({message : "Le nom est requis"})

  if (!description || typeof description !== 'string' || description.length === 0) 
    return res.status(400).json({message : "Le description est requis"})

  if (!price || typeof price !== 'number' || price <= 0) 
    return res.status(400).json({message : "Le prix est requis"})

  if (!stock || typeof stock !== 'number' || stock < 0) 
    return res.status(400).json({message : "Le stock est requis"})

  next()
}

const store = (req, res) => {
  
  const product = req.body
  product.id = ++maxId

  Products.push(product)

  res.status(201).json(product)
}

const update = (req, res) => {
  const product = { ... req.body, id: parseInt(req.params.id) }

  const index = Products.findIndex((p) => p.id === product.id)

  if (index === -1) 
    return res.status(404).json({message : "Product not found !"})

  Products[index] = product
  res.json(product)
}

const destroy = (req, res) => {
  const id = parseInt(req.params.id)

  const index = Products.findIndex((p) => p.id === id)
  if (index === -1) 
    return res.status(404).json({message : "Product not found !"})

  Products.splice(index,1)
  res.json({message : "Product deleted !"})
}

const index  = (req, res ) => {
  const page = parseInt(req.query.page) || 1 
  const limit = parseInt(req.query.limit) || 2

  const start = (page -1) * limit
  const end = page * limit

  res.json({
    currentPage : page,
    itemsPerPage : limit,
    total : Products.length,
    data : Products.slice(start, end)    
  })
}



module.exports = { index, destroy, update, store, validateProduct, getById, search }
