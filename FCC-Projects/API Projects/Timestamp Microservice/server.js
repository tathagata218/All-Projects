const express = require('express');
const bodyParser = require('body-parser');
const path = require("path");
const app = express();
const PORT = 3000;


app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())


app.get('/',(req,res)=>{
res.sendFile(path.join(__dirname,'/index.html'));
})

app.get('/:data',(req, res)=>{
    let data = req.params
    
    res.json({
        receivedData : data
    });
    console.log(data);
})



app.listen(PORT, ()=>{
    console.log(`You are lisining to port ${PORT}`);
})