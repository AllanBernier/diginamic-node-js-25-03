
const { Worker } = require("node:worker_threads")

setInterval(() => {
  console.log("Process running !")
}, 1000)


const useWorker = () => {
  const worker = new Worker("./worker.js", {
    workerData: { limit : 10_000_000_000, interval : 100_000_000 }
  })

  worker.on("message", (msg) => {
    console.log(msg)
  })
}


useWorker()