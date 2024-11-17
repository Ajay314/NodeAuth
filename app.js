const express = require('express');
const DB = require('./database');

const app = express();

DB().then(() => {
    console.log("DataBase Connected..")
    app.listen(3000,()=>{
        console.log("Server running on port 3000");
    })
    
}).catch((err) => {
    console.log("Error in connecting with Database")
});

