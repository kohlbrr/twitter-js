const express = require('express');
const app = express();

app.use((req, res, next) => {
  console.log(req.method + ' '  + req.path)
  next();
})

app.get('/', (req, res) => res.send('It.. is.. ALIVE!\n'))

app.listen(8080, () => console.log('App listening on 8080!'))

