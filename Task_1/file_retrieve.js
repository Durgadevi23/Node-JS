const express = require('express');
const app = express();
const fs = require("fs");
const port = 3000;
fs.readdir("C:\Users\ELCOT\Desktop\node", (err, files) => {
app.get('/',(req,res)=>{
 if (err) throw err;
    res.send(files);
});
app.listen(port,()=>{
    console.log("Welcome to server 3000")
});
