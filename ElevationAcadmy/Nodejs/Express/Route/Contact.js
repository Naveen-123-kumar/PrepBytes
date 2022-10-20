const router = require('express').Router()


router.get('' , (req , res)=>{
    res.sendFile('D:\PrepBytes\ElevationAcadmy\Nodejs\Express\Public\About.html')
})



module.exports  = router