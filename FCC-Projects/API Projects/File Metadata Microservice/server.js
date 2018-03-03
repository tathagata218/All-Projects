const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const PORT = 3000;
const app = express();
const multer = require('multer');

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json());

app.get('/',(req,res)=>{
    res.sendFile(path.join(__dirname,'./index.html'));
});



app.listen(PORT,()=>{
    console.log(`You are lisining to ${PORT}`);
})