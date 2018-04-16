const fs = require('fs')
const http = require('http')
const path = require('path')
const stringDecoder = require('string_decoder')
const decode = new stringDecoder('utf8')
const PORT = 8080


const server = http.createServer((req,res)=>{
    if (req.method ==='POST' && req.url==='/fileUpload'){
        const uplodedData = []
        req.on('data',(data)=>{
            uplodedData.push(data)

        }).on('end',()=>{
            res.write(decode.write(uplodedData[0]))
            res.end()

        })
    }
    else {
        fs.readFile('./index.html', (err,data)=>{
            res.writeHead(200,{'Content-Type' : 'test/html'});
            res.write(data)
            res.end()
        })
    }
})


server.listen(PORT, (err)=>{
    if(!err){
        console.log(`Connected to port ${PORT}`)
    }
    else{
        console.log(err)
    }
})