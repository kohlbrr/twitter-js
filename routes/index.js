const express = require('express'),
      router = express.Router(),
      tweetBank = require('../tweetBank');

router.get('/',function(req,res) {
  let tweets = tweetBank.list();
  console.log(tweets)
  res.render('index',{tweets:tweets} );
});

router.get('/users/:name', (req, res) => {
  var name = req.params.name;
  var list = tweetBank.find({name: name});
  //Nimit Somethingelse
  console.log(name)
  console.log(list)
  res.render('index', {tweets: list});
})

module.exports = router;
