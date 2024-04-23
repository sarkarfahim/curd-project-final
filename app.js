const express = require("express");
const app = new express();
const router = require("./src/route/api")
const rateLimit = require('express-rate-limit');
const helmet = require('helmet');
const hpp = require('hpp')

const  cors = require('cors');
const cookieParser = require('cookie-parser');

const path = require('path');
const mongoose = require("mongoose");



app.use(cookieParser());
app.use(cors());
app.use(helmet());
app.use(hpp());
app.use(express.json({ limit: "50mb" }));
app.use(express.urlencoded({limit: "50mb"}));
const limiter = rateLimit({ windowMs: 15*60*1000, max: 3000 });
app.use(limiter);

//connet mongoose

let URL = "mongodb://localhost:27017/CURD-Producet";
let OPTION = { user: "", pass: "", autoIndex: true };

mongoose.connect(URL, OPTION)
    .then((res) => {
        console.log("Database connected");
    })
    .catch((err) => {
        console.log("Database connect fail");
    });


// Web cache validation and conditional requests in Http
app.set('etag', false);

app.use("/api",router)

// Serve static assets for React front end
app.use(express.static('client/dist'));

///add react front end routing

app.get("*",function (req, res){
    res.sendFile(path.resolve(__dirname,"client","dist","index.html"))
})

module.exports = app;