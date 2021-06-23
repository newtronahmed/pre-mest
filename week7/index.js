const express = require('express');
const app= express();
const mongoose = require('./dbconfig')
const User = require('./models/user')
const {registerValidation, loginValidation} = require('./utils/validation.js')
app.use(express.json())
function getErrorMessages (e){
    let errors = []
        e.details.map(each=>{
            return errors.push({name:each.path[0], message:each.message})
        })
        return errors;
}
const router = express.Router()
router.post('/signup', async function(req,res){
    registerValidation.validateAsync(req.body)
    .then(resp=>{
        const {name,email,password} = resp;
        User.findOne({email}, function(err,user){
            if(user) {
                res.send('already signed up')
                return;
            }
        })
        return User.create({name,email,password})
    }).then(resp=>{
        res.status(201).json({message:'succesful signup', user:resp})
    }).catch(e=>{
        console.log(e)
        const errors = getErrorMessages(e)
        return res.status(400).json({message:'something went wrong', errors})
    })


});

router.post('/signin', async function(req,res){

    loginValidation.validateAsync(req.body)
    .then( async ({email})=>{
        try{
            const user = await User.findOne({email})
            console.log(user)
            res.status(200).json(user)
        }catch(e){
            console.log(e)
            res.status(400).json('couldnt fetch')
        }
    }).catch(e=>{
        const errors = getErrorMessages(e)
        res.json({message:'validation error' , errors})
    })
    
    


})
router.get('/',function(req,res){
    User.find({}).then(resp=>{
        res.send(resp)
    }).catch(e=>console.log(e))
})
app.use(router)
app.listen(3002,function(){
    console.log('server connected')
})
