const express = require('express'),
      router = express.Router(), // this sets up a new router on the express server
      tweetBank = require('../tweetBank');

router.get('/',function(req,res) {
  let tweets = tweetBank.list();
  res.render('index',{tweets: tweets, showForm: true});
});

// router.get('/users/:id', (req, res) => {
//   var id = Number(req.params.id);
//   var list = tweetBank.find({id: id});
//   res.render('index', {tweets: list, showForm: false});
// });

router.get('/users/:name', (req, res) => {
  var name = req.params.name;
  var list = tweetBank.find({name: name});
  res.render('index', {tweets: list, showForm: true, name: name});
});

// router.get('/tweets/:id', (req, res) => {
//
// });

// router.post('/tweets',function (req,res) {
//   var name = req.body.name;
//   var text = req.body.text;
//   tweetBank.add(name, text);
//   io.sockets.emit('newTweet',{name: name, content: text})
//   res.redirect('/');
// })

module.exports = function (io) {
  router.post('/tweets',function (req,res) {
    var name = req.body.name;
    var text = req.body.text;
    tweetBank.add(name, text);
    io.sockets.emit('newTweet',{name: name, content: text})
    res.redirect('/');
  })

  return router;
};
