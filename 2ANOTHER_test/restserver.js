const express = require('express');
const app = express();
const PORT = 5000;

const PRODUCTS = {
    '1001': {name: 'Laptop', price: 999.99, stock: 15},
    '1002': {name: 'Mouse', price: 19.99, stock: 200},
    // ... more products ...
};

app.get('/product/:productId', (req, res) => {
    const product = PRODUCTS[req.params.productId];
    if (product) {
        res.json(product);
    } else {
        res.status(404).json({error: 'Product not found'});
    }
});

app.listen(PORT, () => {
    console.log(`Server started on http://localhost:${PORT}`);
});
