
const validActions = ['pierre', 'feuille', 'ciseaux']
const resultats = ['égalité', 'victoire', 'défaite']

const { Player, Match } = require("../model/index")
const db = require("../config/db")



const getPlayerMatchs = (req, res) => {
  const id = parseInt(req.params.id)

  Player.findByPk(id, { include: [Match] })
    .then((player) => res.json(player))
    .catch((err) => res.status(500).json(err))
}

const getMatch = (req, res) => {
  const id = parseInt(req.params.id)
  Match.findAll({ where: { playerId: id } })
    .then((player) => res.json(player))
    .catch((err) => res.status(500).json(err))
}



const playAgainstComputer = async (req, res) => {
  const action = req.query.action
  const playerId = parseInt(req.params.playerId)

  const player = await Player.findByPk(playerId)
  if (!player) return res.status(404).json({ message: "Player not found !" })

  if (!validActions.includes(action)) return res.status(400).json({ message: "Invalid action" })


  const userIndex = validActions.indexOf(action)

  const computerIndex = Math.floor(Math.random() * 3)
  const computerPlay = validActions[computerIndex]

  const result = (userIndex - computerIndex + 3) % 3
  const strResult = resultats[result]

  const match = await Match.create({
    user_choice: action,
    computer_choice: computerPlay,
    result: strResult,
    playerId
  })


  res.json({ match, message: `Vous avez joué ${action}, l'ordinateur à joué ${computerPlay}, résultat : ${strResult}` })
}




/** Avec des If ElseIf Else */
// const playAgainstComputer = (req, res) => {
//   const action = req.query.action

//   if (!validActions.includes(action)) {
//     return res.status(400).json({ message: "Invalid action" });
//   }

//   const computerPlay = validActions[Math.floor(Math.random() * 3)];
//   let strResult;

//   if (action === computerPlay) {
//     strResult = 'égalité';
//   } else if (
//     (action === 'pierre' && computerPlay === 'ciseaux') ||
//     (action === 'feuille' && computerPlay === 'pierre') ||
//     (action === 'ciseaux' && computerPlay === 'feuille')
//   ) {
//     strResult = 'victoire';
//   } else {
//     strResult = 'défaite';
//   }

//   res.json({message : `Vous avez joué ${action}, l'ordinateur à joué ${computerPlay}, résultat : ${strResult}`})
// }


const getLeaderboard = (req, res) => {
  const countWin = '(SELECT COUNT(*) FROM Matches WHERE PlayerId = Player.id AND Matches.result = "victoire")'

  Player.findAll({
    attributes: ['id', 'name', 'surname', [db.literal(countWin), 'victories']],
    order: [ [db.literal('victories'), 'DESC'] ],
    limit: 10
  })
    .then((players) => res.json(players))
    .catch((err) => res.status(500).json(err.message))
}


module.exports = { playAgainstComputer, getPlayerMatchs, getLeaderboard }



