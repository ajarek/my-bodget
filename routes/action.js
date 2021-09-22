const router = require('express').Router()
const Budget = require('../models/Budget')

router.get('/delete/:id',(req,res)=>{
    const{id}=req.params
    Budget.deleteOne({_id:id})
    .then(()=>{
        console.log('Deleted record successfully!')
        res.redirect("/")
    })
     .catch((err)=>console.log(err))
    
})
module.exports=router