const {Worker} = require("worker_threads");

let number = 10;


let url = [
    'https://swapi.dev/api/people/1',
    'https://swapi.dev/api/people/2',
    'https://swapi.dev/api/people/3',
    'https://swapi.dev/api/people/4',
    'https://swapi.dev/api/people/5',
    'https://swapi.dev/api/people/6',
    'https://swapi.dev/api/people/7',
    'https://swapi.dev/api/people/8',
    'https://swapi.dev/api/people/9',
    'https://swapi.dev/api/people/10',
    'https://swapi.dev/api/people/11',
    'https://swapi.dev/api/people/12',
    'https://swapi.dev/api/people/13',
    'https://swapi.dev/api/people/14',
]


let workers = []
for (let i=0;i<4;i++){

    let worker = new Worker("./myWorker.js", {workerData: {url: url.splice(-4)}});
    addEvents(worker);
    workers.push( worker);

}
function addEvents(worker) {
    worker.once("message", result => {
        console.log(`${number} Crida: ${result}`);
        if(url.length != 0){
            let worker = new Worker("./myWorker.js", {workerData: {url: url.splice(-4)}});
            addEvents(worker);
            workers.push( worker);
        }
    });

    worker.on("error", error => {
        console.log(error);
    });

    worker.on("exit", exitCode => {
        console.log(`Finalitzat a ${exitCode}`);


    })

}


//const worker = new Worker("./myWorker.js", {workerData: {num: number}});


console.log("Execution in main thread "+url)
