const { parentPort, workerData } = require("node:worker_threads")

let i = 0

while (i < workerData.limit) {
  i++
  if (i % workerData.interval == 0) {
    parentPort.postMessage(i)
  }
}

