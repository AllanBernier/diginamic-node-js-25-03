
const { Tournament, Player } = require("../model/index")



const index = (req, res) => {
  Tournament.findAll()
    .then((tournaments) => res.json(tournaments))
    .catch((err) => res.status(500).json(err))
}


const show = (req, res) => {
  const id = parseInt(req.params.id)
  Tournament.findByPk(id)
    .then((tournament) => res.json(tournament))
    .catch((err) => res.status(500).json(err))
}

const create = (req, res) => {
  const { name, date, description, prize } = req.body
  Tournament.create({ name, date, description, prize })
    .then((tournament) => res.status(201).json(tournament))
    .catch((err) => res.status(500).json(err))
}

const update = (req, res) => {
  const id = parseInt(req.params.id)
  const { name, date, description, prize } = req.body
  Tournament.update(
    { name, date, description, prize },
    { where: { id } }
  )
    .then(() => Tournament.findByPk(id))
    .then((tournament) => {
      if (!tournament) {
        return res.status(404).json({ message: "Tournoi non trouvé" })
      }
      res.json(tournament)
    })
    .catch((err) => res.status(500).json(err))
}

const destroy = (req, res) => {
  const id = parseInt(req.params.id)
  Tournament.destroy({ where: { id } })
    .then((count) => {
      if (count === 0) {
        return res.status(404).json({ message: "Tournoi non trouvé" })
      }
      res.status(204).send()
    })
    .catch((err) => res.status(500).json(err))
}


const getTournamentPlayers = async (req, res) => {
  const id = parseInt(req.params.id)

  const tournament = await Tournament.findByPk(id, { include: [Player] })
  if (!tournament) return res.status(400).json({ message: "Tournament not found !" })

  res.json({ players: tournament.Players })
  // res.json({ tournament }) 
}

const addPlayerToTournament = async (req, res) => {
  const tournamentId = parseInt(req.params.id)
  const playerId = parseInt(req.params.playerId)

  const [tournament, player] = await Promise.all([
    Tournament.findByPk(tournamentId),
    Player.findByPk(playerId)
  ])

  // const tournament = await Tournament.findByPk(tournamentId)
  // const player = await Player.findByPk(playerId)

  if (!tournament) return res.status(400).json({ message: "tournament not found " })
  if (!player) return res.status(400).json({ message: "player not found " })


  await tournament.addPlayer(player)

  res.json({ message: "Added !" })
}


const removePlayerFromTournament = async (req, res) => {
  const tournamentId = parseInt(req.params.id)
  const playerId = parseInt(req.params.playerId)

  const [tournament, player] = await Promise.all([
    Tournament.findByPk(tournamentId),
    Player.findByPk(playerId)
  ])

  if (!tournament) return res.status(400).json({ message: "tournament not found " })
  if (!player) return res.status(400).json({ message: "player not found " })

  await tournament.removePlayer(player)

  res.json({message : "detached !"})
}





module.exports = { index, show, create, update, destroy, getTournamentPlayers, addPlayerToTournament, removePlayerFromTournament }