const http=require("http")

const server=http.createServer((req,res)=>{
    if(req.url==='/'){
        res.end(`Home page`)
    }
    else if(req.url==='/about'){
        res.end('About Page')
    }
    else{
        res.write('Error 404')
        res.end()
    }
   
})
server.listen(2022)