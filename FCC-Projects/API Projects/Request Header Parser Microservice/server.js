const express = require('express');
const app = express();
const path = require('path');
const bodyParser = require('body-parser');
const PORT = 3000;



app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json());

app.get('/',(req,res)=>{
    console.log(req.headers);
    const data = {
        
    }
    res.json({message : 'It works'})
});

app.listen(PORT,()=>{
    console.log(`You are lisining to ${PORT}`);
});