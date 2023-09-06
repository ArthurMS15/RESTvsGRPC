const axios = require('axios');
const NUM_REQUESTS = 1000;  // You can adjust this

let startTime;
let completedRequests = 0;

// Fetch the list of products from the server first
axios.get('http://localhost:5000/products')  // Assuming there's an endpoint that lists all products
    .then(response => {
        const data = response.data;  // Here, data is populated with the list of products from the server

        startTime = Date.now();  // Start the timer

        // Now, initiate the benchmarking requests
        for (let i = 0; i < NUM_REQUESTS; i++) {
            axios.get(`http://localhost:5000/product/${i % data.length}`)  // Cycle through data
                .then(response => {
                    completedRequests++;
                    if (completedRequests === NUM_REQUESTS) {
                        let endTime = Date.now();
                        console.log(`REST: ${NUM_REQUESTS} requests took ${(endTime - startTime)}ms`);
                    }
                })
                .catch(error => {
                    console.error('Error in request:', error);
                });
        }
    })
    .catch(error => {
        console.error('Error fetching product list:', error);
    });
