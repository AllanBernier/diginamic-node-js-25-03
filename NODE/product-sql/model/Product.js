const db = require("../config/db")
const sequelize = require("sequelize")

const Product = db.define("product", {
  id : { type : sequelize.INTEGER, primaryKey : true, autoIncrements : true },
  name : { type : sequelize.STRING },
  description : { type : sequelize.STRING },
  price : { type : sequelize.FLOAT },
  stock : { type : sequelize.INTEGER },
})

module.exports = Product