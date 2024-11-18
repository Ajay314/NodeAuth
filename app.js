const express = require('express');
const DB = require('./database');
const urlRoute = require("./Route/url");
const app = express();

app.use(express.json());
app.use("/url",urlRoute);
app.use("/",urlRoute);

DB().then(() => {
    console.log("DataBase Connected..")
    app.listen(3000,()=>{
        console.log("Server running on port 3000");
    })
    
}).catch((err) => {
    console.log("Error in connecting with Database")
});

