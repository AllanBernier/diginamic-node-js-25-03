const sequelize = require("sequelize")
const db = require("../config/db")


const Tournament = db.define('Tournament', {
  id: { type: sequelize.INTEGER, primaryKey : true, autoIncrements : true },
  name: { type: sequelize.STRING },
  date: { type: sequelize.DATE },
  description: { type: sequelize.STRING },
  prize :{ type: sequelize.INTEGER }
})

module.exports = Tournament