const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const PORT = process.env.PORT || 3000;
const app = express();
const shortid = require('shortid');
const validUrl = require('valid-url');


app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

app.get('/',(req,res)=>{
    res.sendFile(path.join(__dirname,'/index.html'));
    })

app.get('/new/:urlData',(req,res)=>{
    let clientData = req.params;
    const regularExp = /^(https:\/\/)[a-z0-9]+([\-\.]{1}[a-z0-9]+)*\.[a-z]{2,5}(:[0-9]{1,5})?(\/.*)?$/gm
    if(regularExp.test(clientData.urlData)){
        //if false
        res.json({message:'Invalid URL'})
    }
    else{
        res.json({
            original_URL : clientData.urlData,
            short_url : 'Short URL'
        })
    }
   
});



app.listen(PORT,()=>{
    console.log(`You are lisining to ${PORT}`);
})
