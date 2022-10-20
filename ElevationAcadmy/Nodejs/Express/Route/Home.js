const router=require('express').Router()
router.get('/',(req,res)=>{
    res.sendFile('D:/PrepBytes/ElevationAcadmy/Nodejs/Express/Public/About.html')
})
router.get('/project',(req,res)=>{
    res.end(`<h1>Hi I am Naveen</h1>`)
})
router.get('/contact',(req,res)=>{
    res.end(`<h1>Hello Developers I am from contact page</h1>`)
})
module.exports = router