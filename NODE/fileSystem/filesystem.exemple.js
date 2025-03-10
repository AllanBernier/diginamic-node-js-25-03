const fs = require("node:fs")


fs.writeFile('exemple.txt', 'Contenu !', 'utf8', (err) => {
  if (err) return console.log("Err", err)
  console.log("Done")
})

