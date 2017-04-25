const express = require('express');
const app = express();
// We'll use `morgan` here if need be

app.use((req, res, next) => {
  console.log(req.method + ' '  + req.path + ' ' + res.statusCode)
  next();
})

app.use('/special', (req, res, next) => {
  console.log('You made it!')
})

app.get('/', (req, res) => { 
  res.status(201).send('Hi!');
})

app.listen(8080, () => console.log('App listening on 8080!'))

