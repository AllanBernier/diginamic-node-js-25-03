const express = require("express")
const {Auteur, Livre} = require("./model/index")
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

  if (!auteur) res.status(404).json({message : "Auteur not found !"})

  const livre = await Livre.create({
    ... req.body,
    auteurId : auteur_id
  })

  res.status(201).json(livre)
})