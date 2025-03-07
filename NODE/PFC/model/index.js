const Player = require("./Player")
const Match = require("./Match")

Player.hasMany(Match)
Match.belongsTo(Player)


module.exports = { Player, Match }