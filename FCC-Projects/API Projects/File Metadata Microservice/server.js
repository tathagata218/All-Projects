const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const PORT = 3000;
const app = express();

app.get('/',(req,res)=>{
    res.sendFile(path.join(__dirname,'./index.html'));
});