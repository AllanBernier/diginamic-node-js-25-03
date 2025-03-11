const { workerData, parentPort } = require("node:worker_threads")

parentPort.postMessage( workerData.a + workerData.b)

