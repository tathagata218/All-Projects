const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const PORT = 3000;
const app = express();
const multer = require('multer');
const storage = multer.diskStorage({
    destination : './uploades',
    filename : (req,res,next)=>{
        next(null)

    }
})
const upload = multer({dest : 'uploades/'});

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json());
app.use(express.static(__dirname + '/public'));

app.get('/',(req,res)=>{
    res.sendFile(path.join(__dirname,'./public/index.html'));
});

app.post('/fileData',upload.any(),(req,res)=>{
    console.log(req.file);
    res.sendStatus(200);
})

app.listen(PORT,()=>{
    console.log(`You are lisining to ${PORT}`);
})