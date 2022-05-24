const {parentPort, workerData} = require("worker_threads");
const url = require("url");
const axios = require("axios");

parentPort.postMessage(funcionWorke(workerData.url));

function funcionWorke(url) {
    let p1 =  new Promise(((resolve, reject) => {
        axios.get(url[0])
            .then(function (response) {
                // handle success
                //console.log(response);
                resolve(response);
            })
            .catch(function (error) {
                // handle error
                console.log(error);
            })
            .then(function () {
                // always executed
            });
    }))
    p1.then((bien) => {
        return bien
    })
}
