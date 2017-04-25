const express = require('express'),
      router = express.Router(),
      tweetBank = require('../tweetBank');

router.get('/',function(req,res) {
  let tweets = tweetBank.list();
  res.render('index',{tweets:tweets} );
});



module.exports = router;
