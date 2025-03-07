const db = require("../config/db")
const Sequelize = require("sequelize")


const Catogory = db.define('catogory', {
  id: { type: Sequelize.INTEGER, primaryKey: true, autoIncrements: true },
  nom : { type : Sequelize.STRING},
  description : { type : Sequelize.STRING},
})

module.exports = Catogory