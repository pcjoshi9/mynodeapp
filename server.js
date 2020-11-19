'use strict';

const express = require('express');

// Constants
const PORT = 8080;
const HOST = '0.0.0.0';

// App
const app = express();
app.get('/', (req, res) => {
  res.send('This is a sample app to test multi repo using common core code -PJ ');
});

app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);
