const express = require('express');
const app = express();
const hbs = require('hbs');

// Helpers HBS
require('./hbs/helpers/helpers');

// Heroku Global variables access
const puerto = process.env.PORT || 3000;

// Hacer directorio público
app.use( express.static( __dirname + '/public') );

// Express HBS
hbs.registerPartials(__dirname + '/views/partials');
app.set('view engine', 'hbs');

app.get('/', (req, res) => {
  res.render('home', {
    nombre: 'chema alFonso'
  });
});

app.get('/about', (req, res) => {
  res.render('about');
});

app.get('/data', (req, res) => {
    res.send('Hello data');
});

app.listen(puerto, () => {
    console.log('Escuchando puerto ' + puerto);
});