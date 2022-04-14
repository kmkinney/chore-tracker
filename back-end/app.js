var createError = require('http-errors');
var express = require('express');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var cors = require('cors')

const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const people = require('./routes/people');
const chores = require('./routes/chores')
const charts = require('./routes/charts')
const app = express();

// view engine setup

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(cors())

mongoose.connect('mongodb://localhost:27017/chores', {
    useUnifiedTopology: true,
    useNewUrlParser: true
})

app.use('/api/people', people.routes);
app.use('/api/chores', chores.routes);
app.use('/api/charts', charts.routes)

// catch 404 and forward to error handler
app.listen(3077, () => console.log('Server listening on port 3077!'));

