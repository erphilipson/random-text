const express = require('express');
const app = express();
const loremIpsum = require('lorem-ipsum');

app.get('/', function(req, res){
  res.send('Nothing to see here! HINT: Try /lorem');
})

app.get('/lorem', function (req, res){
  res.send(loremIpsum({count: 3, units: 'paragraphs', format: 'html'}));
})

app.get('/lorem/:tagId', function (req, res){
  res.send(loremIpsum({count: req.params.tagId, units: 'paragraphs', format: 'html'}));
})

app.listen(3000, function () {
  console.log('You are truly amazing!')
});
