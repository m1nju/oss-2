const express = require('express');

// Constants
const PORT = process.env.PORT || 80;

// App
const app = express();
app.get('/', function (req, res) {

  res.send('hello its me\n');

});

app.listen(PORT);
console.log('Running on http://localhost:' + PORT);
