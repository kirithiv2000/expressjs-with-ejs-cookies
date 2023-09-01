const express = require("express");
const port = 8000;
const app = express();
const router = require("./routes")
const mongoose = require("./config/mongoose")
const expressLayouts = require('express-ejs-layouts')
const cookieParser = require("cookie-parser");
app.set('view engine','ejs');
app.set('layout extractStyles',true);
app.set('layout extractScripts',true);
app.set("views","./views");
app.use(express.urlencoded())
app.use(express.json())
app.use(cookieParser())
app.use(express.static("./asserts"))
app.use(expressLayouts);
app.use("/",router);

app.listen(port,(err)=>{
    if(err){
        console.log(err)
        return 
    }
    console.log("server runnig on port :",port)
})