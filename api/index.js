const express = require("express")
const app = express()
const dotenv = require("dotenv")
const cors = require("cors")
dotenv.config()

app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    res.header("Access-Control-Allow-Headers", "x-access-token, Origin, X-Requested-With, Content-Type, Accept");
    next();
});

app.use(express.json())
// app.use('/result' , Route)

app.listen(8001, () => {
    console.log("Backend Server is Running");
})