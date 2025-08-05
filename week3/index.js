const express = require('express');
const app = express();
const port = 3000;


app.use(express.static('public'));


app.get('/', (req, res) => {
  res.send('Welcome to My Express App');
});


app.get('/add', (req, res) => {
  const a = parseFloat(req.query.a);
  const b = parseFloat(req.query.b);

  if (isNaN(a) || isNaN(b)) {
    return res.status(400).send('Please provide valid numbers in query parameters');
  }

  const result = a + b;
  res.send(`Result: ${result}`);
});

// Start server
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});

