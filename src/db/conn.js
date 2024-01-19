const mongoose = require('mongoose');
require("../db/conn");

mongoose.connect("mongodb://localhost:27017/olympics", {
    useUnifiedTopology:true,
}).then(() => {
    console.log("Connected to MongoDB");
}).catch((e) =>{
    console.log("No Connection");
})
