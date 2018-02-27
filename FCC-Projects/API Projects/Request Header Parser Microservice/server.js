const express = require('express');
const app = express();
const path = require('path');
const bodyParser = require('body-parser');
const PORT = 3000;



app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json());

app.get('/',(req,res)=>{
    console.log(req.headers);
    console.log(req.headers.connection);
    console.log(req.headers.location);
    console.log(req.headers["accept-language"]);
    console.log(req.headers["user-agent"]);
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