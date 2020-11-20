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

var fs = require("fs");

app.get('/core', (req,res) => {
fs.readFile("/usr/src/app/base-core/folder3/file3.txt", function(err, buf) {
  //console.log(buf.toString());
  res.send(buf.toString());
});
});

app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);
