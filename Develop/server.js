const express = require("express");
const morgan = require("morgan");
const mongoose = require("mongoose");

const app = express();
const PORT = process.env.PORT || 8080;

app.use(morgan("dev"));

app.use(express.static('public'));
app.use(express.urlencoded({extended:true}));
app.use(express.json());



require("./routes/api-routes")(app);
require("./routes/html-routes")(app);


var MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost/workout";
mongoose.connect(MONGODB_URI,{  
    useNewUrlParser:true,
    useFindAndModify:false
})



app.listen(PORT,function(){ 
    console.log(`App listening on Port ${PORT}`);
});