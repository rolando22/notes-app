const express = require('express');
const path = require('path');

const app = express();

//Setting
app.set('port', process.env.PORT || 3001);
app.set('views', path.join(__dirname, 'views'));

//Middlewares
app.use(express.urlencoded({ extended: false }));

//Routes
app.get('/', (req, res) => {
    res.send('Hello World');
});

//Static files
app.use(express.static(path.join(__dirname, 'public')));

module.exports = app;
