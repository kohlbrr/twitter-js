// Require Block
const express = require('express'),
      bodyParser = require('body-parser')
      app = express(), // sets up a new express server
      nunjucks = require('nunjucks'),
      routes = require('./routes'),
      path = require('path'),
      socketio = require('socket.io');
// We'll use `morgan` here if need be
app.set('view engine', 'html');
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

app.use('/static',express.static('public'))
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

// app.get('/test',function(req,res) {
//   res.sendFile(path.join(__dirname,'./views/index.html'));
// })

// app.use('/special', (req, res, next) => {
//   console.log('You made it!')
//   next();
// })
//
// app.get('/', (req, res, next) => {
//   res.render('index', { title: 'Hall of Fame',
//                       people: people });
//   //res.status(201).send('Hi!\n');
// })

var server = app.listen(8080, () => console.log('App listening on 8080!'))
var io = socketio.listen(server);

app.use('/', routes(io));
