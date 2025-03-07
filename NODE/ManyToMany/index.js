const express = require("express")
const { Auteur, Livre, Category } = require("./model/index")
const app = express()
app.listen(3000, () => console.log("App running"))


app.get("/auteurs/:id", (req, res) => {
  const id = parseInt(req.params.id)
  Auteur.findByPk(id, { include: [Livre] })
    .then((auteur) => res.json(auteur))
    .catch((err) => res.status(500).json({ message: err }))
})


app.get("/livre/:id/auteur", (req, res) => {
  const id = parseInt(req.params.id)

  Livre.findByPk(id, { include: [Auteur] })
    .then((livre) => res.json(livre.auteur))
    .catch((err) => res.status(500).json({ message: err.message }));
})


app.post("/livres/store/:auteur_id", async (req, res) => {
  const auteur_id = parseInt(req.params.auteur_id)

  const auteur = await Auteur.findByPk(auteur_id)

  if (!auteur) res.status(404).json({ message: "Auteur not found !" })

  const livre = await Livre.create({
    ...req.body,
    auteurId: auteur_id
  })

  res.status(201).json(livre)
})


// Attacher un livre à une catégorie
app.post("/categories/:category_id/livre/:livre_id", async (req, res) => {
  const livre_id = parseInt(req.params.livre_id)
  const category_id = parseInt(req.params.category_id)

  const [livre, category] = await Promise.all([
    Livre.findByPk(livre_id),
    Category.findByPk(category_id)
  ])

  if (!livre) return res.status(400).json({ message: "Book not found !" })
  if (!category) return res.status(400).json({ message: "Category not found !" })

  // livre.addCategory(category) // L'un ou l'autre
  await category.addLivre(livre)

  res.json("Livre ajouté à la catégorie")
})



// Detacher un livre à une catégorie
app.delete("/categories/:category_id/livre/:livre_id", async (req, res) => {
  const livre_id = parseInt(req.params.livre_id)
  const category_id = parseInt(req.params.category_id)

  const [livre, category] = await Promise.all([
    Livre.findByPk(livre_id),
    Category.findByPk(category_id)
  ])

  if (!livre) return res.status(400).json({ message: "Book not found !" })
  if (!category) return res.status(400).json({ message: "Category not found !" })

  // livre.removeCategory(category) // L'un ou l'autre
  await category.removeLivre(livre)

  res.json("Livre ajouté à la catégorie")
})


// Récupérer toutes les catégories d'un livre
app.get("/categories/:livre_id/livre", (req, res) => {
  const livre_id = parseInt(req.params.livre_id)

  Livre.findByPk(livre_id, { include : [Category] } )
  .then( (livre) => res.json(livre) )
  .catch( (err) => res.status(500).json(err))
})
