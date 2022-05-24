// Access the workerData by requiring it.
const {parentPort, workerData} = require('worker_threads');
const axios = require("axios");

// Something you shouldn"t run in main thread
// since it will block.
function fetchJSON(url) {
    return fetch(url).then(response => response.json());
}

function realitzarRequeast(urls) {

    let promesas = []
    for (let url of urls) {
        promesas.push(axios.get(url));
    }
    console.log(urls);

    Promise.all(promesas).then(function (values) {
        let resultado = [];
        for (let value of values) {
            //console.log(value.data);
            resultado.push(value.data.name);
        }
        parentPort.postMessage(resultado);


    });

}

// Main thread will pass the data you need
// through this event listener.
parentPort.on('message', (param) => {
    realitzarRequeast(param);

    // Access the workerData.
    console.log('workerData is', param);
});