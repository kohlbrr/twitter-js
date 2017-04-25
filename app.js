// Require Block
const express = require('express'),
      app = express(),
      nunjucks = require('nunjucks')
// We'll use `morgan` here if need be
app.set('view engine', 'html');
app.engine('html', nunjucks.render);
nunjucks.configure('views', { noCache: true });

const people = [{ name: 'Full' },
                { name: 'Stacker' },
                { name: 'Son'}];
//res.render('index', { title: 'Hall of Fame',
//                      people: people });

app.use((req, res, next) => {
  var logMessage = req.method + ' ' + req.path
  res.on('finish', () => {  // PERFECT example of leveraging async
    logMessage += ' ' + res.statusCode
    console.log(logMessage)
  })
  next();
})

app.use('/special', (req, res, next) => {
  console.log('You made it!')
  next();
})

app.get('/', (req, res, next) => { 
  res.render('index', { title: 'Hall of Fame',
                      people: people });
  //res.status(201).send('Hi!\n');
})

app.listen(8080, () => console.log('App listening on 8080!'))
