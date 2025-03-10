const Player = require("./Player")
const Match = require("./Match")
const Tournament = require("./Tournaments")


Player.hasMany(Match)
Match.belongsTo(Player)

Player.belongsToMany(Tournament, { through : 'player_tournament' })
Tournament.belongsToMany(Player, { through : 'player_tournament' })

module.exports = { Player, Match, Tournament }