const { parentPort } = require("node:worker_threads")

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

parentPort.postMessage( longCPUTask() )