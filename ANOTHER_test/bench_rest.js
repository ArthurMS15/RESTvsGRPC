const axios = require('axios');
const async = require('async');
const http = require('http');
const https = require('https');

const NUM_REQUESTS = 100000;
const CONCURRENT_REQUESTS = 1000; // Vamos fazer 50 requisições simultaneamente

http.globalAgent.maxSockets = Infinity;
https.globalAgent.maxSockets = Infinity;

const axiosInstance = axios.create({
  httpAgent: new http.Agent({ keepAlive: true }),
  httpsAgent: new https.Agent({ keepAlive: true })
});

let startTime;
let completedRequests = 0;
let requestTimes = [];
let failedRequests = 0;

axiosInstance.get('http://localhost:5000/products')
    .then(response => {
        const data = response.data;

        const tasks = Array.from({ length: NUM_REQUESTS }).map((_, i) => {
            return callback => {
                const reqStartTime = Date.now();
                axiosInstance.get(`http://localhost:5000/product/${i % data.length}`)
                    .then(() => {
                        const reqEndTime = Date.now();
                        const elapsedTime = reqEndTime - reqStartTime;
                        requestTimes.push(elapsedTime);
                        callback(null, elapsedTime);
                    })
                    .catch(error => {
                        console.error('Error in request:', error);
                        failedRequests++;
                        callback(error);
                    });
            };
        });

        startTime = Date.now();

        async.parallelLimit(tasks, CONCURRENT_REQUESTS, () => {
            const endTime = Date.now();
            console.log(`REST: ${NUM_REQUESTS} requests took ${(endTime - startTime)}ms`);
            console.log(`${failedRequests} requests failed.`);

            requestTimes.sort((a, b) => a - b); // Sort request times

            const minTime = requestTimes[0];
            const maxTime = requestTimes[requestTimes.length - 1];
            const medianTime = requestTimes[Math.floor(requestTimes.length / 2)];
            const totalTime = requestTimes.reduce((acc, curr) => acc + curr, 0);
            const meanTime = totalTime / requestTimes.length;

            console.log(`Connection Times (ms)`);
            console.log(`min: ${minTime} ms, mean: ${meanTime.toFixed(2)} ms, median: ${medianTime} ms, max: ${maxTime} ms`);

            const calculatePercentile = (percentile) => {
                return requestTimes[Math.floor(requestTimes.length * percentile)];
            };

            console.log(`Percentage of the requests served within a certain time (ms)`);
            console.log(`50%: ${calculatePercentile(0.5)} ms`);
            console.log(`66%: ${calculatePercentile(0.66)} ms`);
            console.log(`75%: ${calculatePercentile(0.75)} ms`);
            console.log(`80%: ${calculatePercentile(0.8)} ms`);
            console.log(`90%: ${calculatePercentile(0.9)} ms`);
            console.log(`95%: ${calculatePercentile(0.95)} ms`);
            console.log(`98%: ${calculatePercentile(0.98)} ms`);
            console.log(`99%: ${calculatePercentile(0.99)} ms`);
            console.log(`100%: ${maxTime} ms (longest request)`);
        });
    })
    .catch(error => {
        console.error('Error fetching product list:', error);
    });
