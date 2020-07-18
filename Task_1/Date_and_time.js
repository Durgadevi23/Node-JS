const express = require('express');
const app = express();

const port = 3000;

app.get('/',(req,res)=>{
var dateTime = require('node-datetime');
var dt = dateTime.create();
var formatted = dt.format('Y-m-d H:M:S');
res.send(formatted)
});

app.listen(port,()=>{
    console.log("Welcome to server 3000")
});
