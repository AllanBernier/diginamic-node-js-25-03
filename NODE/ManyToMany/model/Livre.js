const db = require("../config/db")
const Sequelize = require("sequelize")


const Livre = db.define('livre', {
  id: { type: Sequelize.INTEGER, primaryKey: true, autoIncrements: true },
  title: { type: Sequelize.STRING },
})

module.exports = Livre