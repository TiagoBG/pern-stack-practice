const express = require('express');
const app = express();
const port = 8000;

require('dotenv').config();

//middlewares
app.use(express.json());
app.use(express.urlencoded({extended: false}));

//routes
app.use(require('./src/routes/routes'));

//listen port
app.listen(port, ()=>{
    console.log(`Example app listening at http://localhost:${port}`)
});
