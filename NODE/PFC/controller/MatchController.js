
const validActions = ['pierre', 'feuille', 'ciseaux']
const resultats = ['égalité', 'victoire', 'défaite']

const playAgainstComputer = (req, res) => {
  const action = req.query.action

  if( ! validActions.includes(action) ) return res.status(400).json({message : "Invalid action"})


  const userIndex = validActions.indexOf(action)

  const computerIndex = Math.floor( Math.random() * 3 )
  const computerPlay = validActions[computerIndex]


  const result = (userIndex - computerIndex + 3) % 3

  const strResult = resultats[result]

  res.json({message : `Vous avez joué ${action}, l'ordinateur à joué ${computerPlay}, résultat : ${strResult}`})
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




module.exports = { playAgainstComputer }


