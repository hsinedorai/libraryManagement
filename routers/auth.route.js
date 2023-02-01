const route=require('express').Router()
const AuthController=require('../controllers/auth.controller')


const body=require('express').urlencoded({extends:true})
    
route.get('/register',AuthController.getRegisterPage)

route.post('/register',body,AuthController.postRegisterData)





module.exports=route
















