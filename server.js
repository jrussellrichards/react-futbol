const express = require('express');
const app = express();
const port = process.env.PORT || 3000;
const path = require('path');

app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  res.header("Access-Control-Allow-Methods", "POST, GET, OPTIONS, DELETE, PUT");
  next();
});

app.use(express.static('dist'));

app.listen(port, () => console.log(`Listening on port ${port}`));

app.get('/',function(req,res) {
    res.sendFile(__dirname + '/dist/');
  });

// Tengo un problema el vscode me marca todo con error.