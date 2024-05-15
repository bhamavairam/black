const express   = require('express');
const morgan    = require('morgan');

const userRouter = require('./routes/userRoutes');
const projectRouter = require('./routes/projectRoutes');

const app = express();

app.use(morgan('dev'));
app.use(express.json());

//FOR STATIC FILE ACCESS
app.use(express.static(__dirname+'/public'));

app.use('/api/v1/users', userRouter);
app.use('/api/v1/projects', projectRouter);

module.exports = app;