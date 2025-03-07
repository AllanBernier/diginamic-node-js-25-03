const db = require("../config/db")
const sequelize = require("sequelize")

const Player = db.define('Player', {
  id : { type: sequelize.INTEGER, autoIncrements : true, primaryKey: true },
  name : { type: sequelize.STRING },
  surname : { type: sequelize.STRING },
  picture_url : { type: sequelize.STRING },
  birth_date : { type: sequelize.DATE },
}) 

module.exports = Player