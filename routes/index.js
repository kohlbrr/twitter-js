const express = require('express'),
      router = express.Router(),
      tweetBank = require('../tweetBank');

router.get('/',function(req,res) {
  let tweets = tweetBank.list();
  res.render('index',{tweets: tweets} );
});

router.get('/users/:id', (req, res) => {
  var id = Number(req.params.id);
  var list = tweetBank.find({id: id});
  res.render('index', {tweets: list});
});

router.get('/tweets/:id', (req, res) => {
  
});

module.exports = router;
