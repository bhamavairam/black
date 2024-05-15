const express   = require('express');
const morgan    = require('morgan');

const userRouter = require('./routes/userRoutes');
const projectRouter = require('./routes/projectRoutes');
const clientRouter = require('./routes/clientRoutes')

const app = express();

app.use(morgan('dev'));
app.use(express.json());

//FOR STATIC FILE ACCESS
app.use(express.static(__dirname+'/public'));

app.use('/api/v1/users', userRouter);
app.use('/api/v1/projects', projectRouter);
app.use('/api/v1/clients', clientRouter);

module.exports = app;