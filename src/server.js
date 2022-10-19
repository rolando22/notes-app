const express = require('express');
const exphbs = require('express-handlebars');
const path = require('path');

const app = express();

//Setting
app.set('port', process.env.PORT || 3001);
app.set('views', path.join(__dirname, 'views'));
app.engine('.hbs', exphbs({
    defaultLayout: 'main',
    layoutsDir: path.join(app.get('views'), 'layouts'),
    partialsDir: path.join(app.get('views'), 'partials'),
    extname: '.hbs',
}));
app.set('view engine', '.hbs')

//Middlewares
app.use(express.urlencoded({ extended: false }));

//Routes
app.get('/', (req, res) => {
    res.send('Hello World');
});

//Static files
app.use(express.static(path.join(__dirname, 'public')));

module.exports = app;
