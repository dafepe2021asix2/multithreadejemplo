const {Worker} = require("worker_threads");

let number = 10;


let urls = [
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
const {StaticPool} = require("node-worker-threads-pool");
const url = require("url");

let num = 40;
let num2 = 42;
let num3 = 50;
//Create a static worker pool with 8 workers
const pool = new StaticPool({
    size: 4,
    task: "./worker.js"
});

let medida = urls.length;
for (let i = 0; i < medida/2; i++) {
    (async () => {
        // This will choose one idle worker in the pool
        // to execute your heavy task without blocking
        // the main thread!
        const res = await pool.exec(urls.splice(-2));

        console.log(`Request(${i}) result:`, res)

    })();
}