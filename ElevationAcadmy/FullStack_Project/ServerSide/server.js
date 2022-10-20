const express=require('express')
const cors=require('cors')//cross origin resouce sharing
const movie_Data=require('./data')
const app=express()
const port=4000 || process.env.PORT 

app.use(cors())

app.get('/',(req,res)=>{
    res.end('<h1>Finally we are Full stack developers</h1>')
})
app.get('/movie',(req,res)=>{
    res.json(movie_Data).status(200)
})

app.get('/movie/:id',(req,res)=>{
    console.log(req.params)
    res.end((req.params["id"]))
})

app.listen(port,()=>{
    console.log(`Connected to port number ${port}`)
})
