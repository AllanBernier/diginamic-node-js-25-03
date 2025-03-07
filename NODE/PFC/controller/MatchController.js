
const validActions = ['pierre', 'feuille', 'ciseaux']


const playAgainstComputer = (req, res) => {
  const action = req.query.action

  if( ! validActions.includes(action) ) return res.status(400).json({message : "Invalid action"})


  const userIndex = validActions.indexOf(action)

  const computerIndex = Math.floor( Math.random() * 3 )
  const computerPlay = validActions[computerIndex]

  const resultats = ['égalité', 'victoire', 'défaite']

  const result = (userIndex - computerIndex + 3) % 3

  const strResult = resultats[result]

  res.json({message : `Vous avez joué ${action}, l'ordinateur à joué ${computerPlay}, résultat : ${strResult}`})
}



module.exports = { playAgainstComputer }