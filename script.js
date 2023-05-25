

const express = require('express');
const app = express();

app.use(express.json());

app.post('/decimalToBinary', (req, res) => {
  const decimal = req.body.n;
  const binary = decimalToBinary(decimal);
  res.json({ result: binary });
});

function decimalToBinary(decimal) {
  // Conversion logic here
  // ...
	let binary = "";
  while (decimal > 0) {
    binary = (decimal % 2) + binary;
    decimal = Math.floor(decimal / 2);
  }
  return binary;
}

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});




