var express = require('express');
var router = express.Router();
var superagent = require('superagent');

router.get('/:arg', function(req, res, next) {
  var url = 'https://interface.meiriyiwen.com/article/today?dev=1';
  if (arg === 'random') {
    url = "https://interface.meiriyiwen.com/article/random?dev=1";
  }
  if (arg === 'date') {
    url = "https://interface.meiriyiwen.com/article/day?dev=1&date=" + req.query.date;
  }
  superagent.get(url).then((json) => {
    res.send(json);
  }).catch((err) => {
    res.send(err);
  });
});
