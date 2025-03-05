const express = require("express")
const app = express()


app.use(express.json())

app.listen(3000, () => {
  console.log("App listening on port 3000 !")
})



const Products = [
  { id: 1, nom: "Ordinateur portable", description: "Laptop haute performance", prix: 999.99, stock: 50 },
  { id: 2, nom: "Smartphone", description: "Téléphone dernière génération", prix: 699.99, stock: 100 },
  { id: 3, nom: "Casque audio", description: "Casque bluetooth sans fil", prix: 149.99, stock: 75 },
  { id: 4, nom: "souris", description: "Tablette tactile 10 pouces", prix: 299.99, stock: 30 },
  { id: 5, nom: "Souris", description: "Smartwatch avec GPS", prix: 199.99, stock: 45 }
]
let maxId = 5




// Exercice 10 : Simulation d’un retard pour tester le front-end
// Ajoutez un middleware à toutes les routes pour simuler un retard de 2 secondes avant de répondre, en utilisant setTimeout.
app.use((req, res, next) => {
  setTimeout( next ,2000)
})


// Exercice 1 : GET - Récupérer tous les produits (getAll)
// Créez une route GET sur l’URL /products qui retourne la liste complète des produits sous forme de JSON.
// app.get("/products", (req, res) => {
//   res.json(Products)
// })


// Exercice 3 : GET - Rechercher un produit par un champ
// Créez une route GET sur l’URL /products/search qui accepte un paramètre de requête name.
// Retournez tous les produits dont le nom correspond (insensible à la casse).
// Si aucun produit ne correspond, retournez un tableau vide.
// Exemple de requête :
// GET /products/search?name=Souris
app.get("/products/search", (req, res) => {
  const {name} = req.query

  const products = Products.filter( (p) => p.nom.toLowerCase() === name.toLowerCase())

  res.json(products)
})


// Exercice 2 : GET - Récupérer un produit par son ID (getById)
// Créez une route GET sur l’URL /products/:id qui retourne un produit spécifique en fonction de son ID.
// Si l'produit est trouvé, renvoyez ses données.
// Sinon, renvoyez une erreur 404 avec un message JSON.
app.get("/products/:id", (req, res) => {
  const id = parseInt(req.params.id)
  const product = Products.find( (p) => p.id === id)

  if (!product){
    return res.status(404).json({message : "Product not found !"})
  }

  res.json(product)
})

// Exercice 7 : Validation des données lors du POST et du PUT
// Mettez à jour les routes POST et PUT pour inclure une validation des données :
// Assurez-vous que name est une chaîne non vide et que age est un entier positif.
// Si les données sont invalides, retournez une erreur 400 avec un message d’erreur JSON

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




// Exercice 4 : POST - Ajouter un nouvel produit
// Créez une route POST sur l’URL /products qui accepte un objet JSON dans le corps de la requête pour ajouter un nouvel produit.
// Le JSON doit inclure name et age.
// Assurez-vous que l'ID de l'produit est généré automatiquement (par exemple, incrémenté à partir de l'ID le plus élevé).
// Retournez l'produit nouvellement ajouté avec un statut 201.

app.post("/products", validateProduct,  (req, res) => {
  
  const product = req.body
  product.id = ++maxId

  Products.push(product)

  res.status(201).json(product)
})


// Exercice 5 : PUT - Mettre à jour un produit existant
// Créez une route PUT sur l’URL /products/:id pour mettre à jour les informations d’un produit existant.
// Si l’produit est trouvé, mettez à jour ses informations (name, age) à partir du corps de la requête.
// Si l'produit n'existe pas, renvoyez une erreur 404.
// Retournez les informations mises à jour de l’produit.

app.put("/products/:id", validateProduct, (req, res) => {
  const product = { ... req.body, id: parseInt(req.params.id) }

  const index = Products.findIndex((p) => p.id === product.id)

  if (index === -1) 
    return res.status(404).json({message : "Product not found !"})

  Products[index] = product
  res.json(product)
})



// Exercice 6 : DELETE - Supprimer un produit existant
// Créez une route DELETE sur l’URL /products/:id pour supprimer un produit existant.
// Si l'produit n'existe pas, renvoyez une erreur 404.
app.delete("/products/:id", (req, res) => {
  const id = parseInt(req.params.id)

  const index = Products.findIndex((p) => p.id === id)
  if (index === -1) 
    return res.status(404).json({message : "Product not found !"})

  Products.splice(index,1)
  res.json({message : "Product deleted !"})
})


// Exercice 8 : Limitation des résultats avec GET - getAll avec pagination
// Ajoutez une fonctionnalité de pagination à la route GET /products.
// Acceptez deux paramètres de requête : page (numéro de page) et limit (nombre d’éléments par page).
// Retournez uniquement les produits correspondant à la page demandée.
// Exemple de requête :
// GET /products?page=1&limit=2
app.get("/products", (req, res) => {
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
})



// Exercice 9 : Gestion des erreurs pour les routes non trouvées
// Ajoutez un middleware qui intercepte les routes non définies et retourne une erreur 404 avec un message d’erreur:
app.use( (req, res) => {
  res.status(404).json({ message : "Route non définit"})
})
