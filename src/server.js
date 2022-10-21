const express = require('express');
const { engine } = require('express-handlebars');
const path = require('path');
const methodOverride = require('method-override');

const app = express();

//Setting
app.set('port', process.env.PORT || 3001);
app.set('views', path.join(__dirname, 'views'));
app.engine('.hbs', engine({
    defaultLayout: 'main',
    layoutsDir: path.join(app.get('views'), 'layouts'),
    partialsDir: path.join(app.get('views'), 'partials'),
    extname: '.hbs',
}));
app.set('view engine', '.hbs')

//Middlewares
app.use(express.urlencoded({ extended: false }));
app.use(methodOverride('_method'));

//Routes
app.use(require('./routes/index.routes'));
app.use(require('./routes/notes.routes'));

//Static files
app.use(express.static(path.join(__dirname, 'public')));

module.exports = app;
