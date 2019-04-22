const express = require('express');
const app = express()
const dotenv = require('dotenv');
const {db_connection} = require('./config');
dotenv.config();
const sequelize = db_connection();
sequelize.authenticate().then(() => {
    console.log("success")
}).catch(() => {
    console.log("error");
});


app.listen(4000,()=>{

    console.log("server listening on port 4000")
})
