const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const PORT = 3000;


app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.get('/:data',(req, res)=>{
    let data = req.params
    
    res.json({
        receivedData : data
    });
})



app.listen(PORT, ()=>{
    console.log(`You are lisining to port ${PORT}`);
})