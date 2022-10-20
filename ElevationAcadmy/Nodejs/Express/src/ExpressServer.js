const express=require('express')
const app=express()
const path=require('path')
const bodyParser = require('body-parser');
const bcrypt = require('bcrypt');
const dotenv = require('dotenv');

const jwt = require('jsonwebtoken');
dotenv.config();


console.log(__dirname)
console.log(path.join(__dirname,'../Public'))
const staticPath=path.join(__dirname,'../Public')
app.use(express.static(staticPath))
const port=4000
// const {add,sub,mul,obj}=require('../modules/Addition')
// add(4,5)
 
// magical code
app.use(bodyParser.json())
// create application/x-www-form-urlencoded parser
app.use(bodyParser.urlencoded({ extended: false }))
//home route
// app.get('/',(req,res)=>{
//     res.end('home page')
// })
// app.get('/about',(req,res)=>{
// res.end('About page')
// })
const user=true
const localmiddleWare=(req,res,next)=>{
    user ? next() : res.redirect("/");
}
// app.get('/',(req,res)=>{
//     res.end('Hello')
// })
app.get('/protected',localmiddleWare,(req,res)=>{
    res.end('Protected Page')
})
app.get('/',(req,res)=>{
    res.sendFile(`D:/PrepBytes/ElevationAcadmy/Nodejs/Express/Public/Home.html`)
})
// app.use('/',(require('../Route/Home')))
// app.use('/log',require('../Route/Login'))
app.get('/home/admin',(req,res)=>{
        // res.sendFile(`D:/PrepBytes/ElevationAcadmy/Nodejs/Express/Public/Home.html`)
        res.end('Hi')
        })

app.post('/post',(req,res)=>{
    console.log("data:",req.body);

    res.end('Got it')
})
app.get('/player/:id',(req,res)=>{
    res.end(( req.params["id"]))
})

// encrytion vs hashing password

const hashing =async()=>{
    const password = "catsaresmart123";
    const hash= await bcrypt.hash(password,12);
    console.log(hash);

    const pass = "catsaresmart123";
    const verify = await bcrypt.compare(pass,hash)
    console.log(verify)
}
hashing()

const jsonweb = async() =>{
    const secretkey=process.env.SECRET_KEY
    const token =jwt.sign( {
        id:"1233432534daw"
    },secretkey )
    console.log(token);

    const verify= jwt.verify(token,secretkey);
    console.log(verify);

}

jsonweb()

app.listen(port,()=>{
    console.log(`connected to port ${port}`)
})


