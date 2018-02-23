const express = require('express');
const bodyParser = require('body-parser');
const path = require("path");
const moment  = require('moment');
const app = express();
const PORT = 3000;


app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())


app.get('/',(req,res)=>{
res.sendFile(path.join(__dirname,'/index.html'));
})

app.get('/:date',(req, res)=>{
    let data = req.params

    
    
    if(moment(data.date,"MMMM DD YYYY").isValid()){
        res.json({
            unix : moment(data.date,'MMMM DD YYYY').unix(), 
            TimeEntered : data.date
        });
    }
    else if(moment.unix(data.date).isValid()){
        res.json({
            unix : data.date, 
            receivedData : moment.unix(data.date).format("MMMM DD YYYY")
        });
    }
    else {
        res.json({
            error: "Please type the unix time or month,day,year format"
        })
    }
    
  
})



app.listen(PORT, ()=>{
    console.log(`You are lisining to port ${PORT}`);
})