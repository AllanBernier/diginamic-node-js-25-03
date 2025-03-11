// Exercice 3 : Effectuer une tâche longue dans un worker
// Implémente un calcul de la somme des carrés de tous les entiers entre 1 et un grand nombre (par exemple, 10 millions) dans un worker thread.
// Compare le temps d'exécution entre le thread principal et le worker thread.
const { Worker } = require("node:worker_threads")

const longCPUTask = () => {
  const start = Date.now()

  let sum = 0
  let i = 0

  while (i < 1_000_000_000) {
    i++
    sum = sum + i ^ 2
  }

  return Date.now() - start
}

const worker = new Worker("./worker.js")

worker.on("message", (result) => {
  console.log("Message :" + result)
})



console.log(longCPUTask())