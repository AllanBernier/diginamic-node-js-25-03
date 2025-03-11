// Exercice 1 : Créer un worker simple
// Dans ce fichier, crée un worker thread qui calcule la somme de deux nombres.
// Envoie deux nombres au worker via workerData et retourne le résultat au thread principal.
// Affiche le résultat dans le thread principal.
const { Worker } = require("node:worker_threads")

const worker = new Worker("./worker.js", {
  workerData : { a: 75, b : 25 }
})

worker.on("message", (result) => {
  console.log(result)
})
