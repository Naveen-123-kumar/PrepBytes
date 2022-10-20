const router = require('express').Router()


router.get('/in' , (req , res)=>{
    res.end("logged In")
})


router.get('/out' , (req , res)=>{
    res.end("logged Out")
})

router.get('/reg' , (req , res)=>{
    res.end("Register")
})

module.exports  = router