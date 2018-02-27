const express = require('express');
const app = express();
const path = require('path');
const bodyParser = require('body-parser');
const PORT = 3000;



app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json());

app.get('/',(req,res)=>{
    
    const data = {
        ipaddress : req.ip,
        language : req.headers["accept-language"],
        'software' : req.headers["user-agent"],
    };
    res.json(data);
});

app.listen(PORT,()=>{
    console.log(`You are lisining to ${PORT}`);
});