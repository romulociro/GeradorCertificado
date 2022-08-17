const express = require("express");
const app = express();
const bodyParser = require('body-parser'); 
const createPDF = require('./generate');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
}));

app.post('/certificado', function(req, res){
  data = {
    name: req.body.data.name,
    date: req.body.data.date,
    studentname: req.body.data.studentname
  }
  temp = req.body.template
  createPDF(data, temp)
  res.sendStatus(200);
});

app.listen(8081);