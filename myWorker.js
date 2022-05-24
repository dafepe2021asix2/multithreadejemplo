const {parentPort, workerData} = require("worker_threads");
const url = require("url");

parentPort.postMessage(funcionWorke(workerData.url));
 function funcionWorke(url) {
    return url
}
