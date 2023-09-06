const express = require('express');
const fs = require('fs');
const csv = require('csv-parser');

const app = express();
const PORT = 5000;

let data = [];

fs.createReadStream('E-commerce Dataset.csv')
  .pipe(csv())
  .on('data', (row) => {
    data.push(row);
  })
  .on('end', () => {
    console.log('CSV file successfully processed');
  });

app.get('/product/:id', (req, res) => {
  const product = data[req.params.id];
  res.json(product);
});

app.get('/products', (req, res) => {
  res.json(data);
});

app.listen(PORT, () => {
  console.log(`Server started on http://localhost:${PORT}`);
});
