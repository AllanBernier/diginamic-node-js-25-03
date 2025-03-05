const db = require("../config/db")
const sequelize = require("sequelize")

const User = db.define('user', {
  id: { type: sequelize.INTEGER, autoIncrements : true, primaryKey: true },
  name: { type: sequelize.STRING },
  age: { type: sequelize.INTEGER },
  email: { type: sequelize.STRING }
})

module.exports = User