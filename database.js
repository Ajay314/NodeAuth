const mongoose = require('mongoose');


const DB = async ()=>{ 
     await mongoose.connect("mongodb+srv://ajay314:Ajay%40314@node.rbxto.mongodb.net/")
}

module.exports = DB;
