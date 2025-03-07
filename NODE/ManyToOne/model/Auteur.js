const db = require("../config/db")
const Sequelize = require("sequelize")


const Auteur = db.define('auteur', {
  id: { type: Sequelize.INTEGER, primaryKey: true, autoIncrements: true },
  name: { type: Sequelize.STRING },
  prenom: { type: Sequelize.STRING },
})


module.exports = Auteur


