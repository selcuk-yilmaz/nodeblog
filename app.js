const http=require ("http")

const hostname="127.0.0.1"
const port=3000
const server=http.createServer((req,res)=>{
    console.log(req.url)
    res.statusCode=200
    res.setHeader('content-Type','text/plain')
    res.end('hello Node.js')
})

server.listen(port,hostname,()=>{
    console.log(`Server çalisiyor,http://${hostname}:${port}/`);
    
})