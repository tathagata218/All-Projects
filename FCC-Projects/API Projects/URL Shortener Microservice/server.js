const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const PORT = process.env.PORT || 3000;
const app = express();


app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

app.get('/',(req,res)=>{
    res.sendFile(path.join(__dirname,'/index.html'));
    })

app.get(':/urlData',(req,res)=>{
    let clientData = req.params;
    const regularExp = /^(https:\/\/)[a-z0-9]+([\-\.]{1}[a-z0-9]+)*\.[a-z]{2,5}(:[0-9]{1,5})?(\/.*)?$/gm
    if(regularExp.test(clientData.urlData)){
        //if false
    }
    else{
        res.json({
            original_URL : clientData.urlData,
            short_url : 'Short URL'
        })
    }
   
});



app.listen(PORT,()=>{
    console.log(`You are lisining to $(PORT)`);
})
