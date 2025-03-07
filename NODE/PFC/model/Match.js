const db = require("../config/db")
const sequelize = require("sequelize")

const Match = db.define('Match', {
  id: { type: sequelize.INTEGER, autoIncrements: true, primaryKey: true },
  user_choice: { type: sequelize.ENUM('pierre', 'feuille', 'ciseaux') },
  computer_choice: { type: sequelize.ENUM('pierre', 'feuille', 'ciseaux') },
  result: { type: sequelize.ENUM('victoire', 'défaite', 'égalité') }
})

module.exports = Match