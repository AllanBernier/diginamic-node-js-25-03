const Auteur = require("./Auteur")
const Livre = require("./Livre")
const Category = require("./Category")

Livre.belongsTo(Auteur)
Auteur.hasMany(Livre)

Livre.belongsToMany(Category, { through : 'Category_Livre'})
Category.belongsToMany(Livre, { through : 'Category_Livre'})



module.exports = { Auteur, Livre, Category }