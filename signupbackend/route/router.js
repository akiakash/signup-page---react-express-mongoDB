const express=require('express')
const router = express.Router()
const signupTemplateCopy=require('../models/signupmodels')


router.post('/signup',(request,response)=>{
    const signedUpUser=new signupTemplateCopy({
        
    })
})

module.exports=router
