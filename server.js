//const cors = require('cors');
const mongoose = require('mongoose');
require('dotenv/config');

const app = require('./app')

const DB = process.env.DATABASE;
const api = process.env.API_URL;
const port = process.env.PORT || 4005;

console.log("DB string: "+DB)
mongoose.connect(DB)
.then(
    () => { console.log("Database Connection Ready!") })
.catch((err)=> {
    console.log(err)
  })

app.listen(port, ()=> {
    console.log("App running on port "+port);
} )
