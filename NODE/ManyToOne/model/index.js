const Auteur = require("./Auteur")
const Livre = require("./Livre")

Livre.belongsTo(Auteur)
Auteur.hasMany(Livre)



module.exports = { Auteur, Livre }