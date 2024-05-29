const express   = require('express');
const morgan    = require('morgan');
const cors = require('cors');

const userRouter = require('./routes/userRoutes');
const projectRouter = require('./routes/projectRoutes');
const clientRouter = require('./routes/clientRoutes')
const skillRouter = require('./routes/skillRoutes')
const resourceRouter = require('./routes/resourceRoutes')

const app = express();

app.use(morgan('dev'));
app.use(express.json());

app.use(cors());
app.options('*', cors());


//FOR STATIC FILE ACCESS
app.use(express.static(__dirname+'/public'));

app.use('/api/v1/users', userRouter);
app.use('/api/v1/projects', projectRouter);
app.use('/api/v1/clients', clientRouter);
app.use('/api/v1/skills', skillRouter);
app.use('/api/v1/resources', resourceRouter);

module.exports = app;