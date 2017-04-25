const express = require('express');
const app = express();
// We'll use `morgan` here if need be

app.use((req, res, next) => {
  var logMessage = req.method + ' ' + req.path
  res.on('finish', () => {
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
  res.status(201).send('Hi!\n');
})

app.listen(8080, () => console.log('App listening on 8080!'))
