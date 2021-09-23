const router = require('express').Router()
const List = require('../models/Budget')

router.get('/compose',(req,res)=>{
    res.render('addOperation')
})
.post('/compose',(req,res)=>{
    const{dateOperation,income,expenses,description}=req.body
    if(!dateOperation || !income || !expenses || !description )
     return res.send('Plese enter the required credetnials!')
    
     const newList =new List({dateOperation,income,expenses,description})
     newList.save()
     .then(()=>{
         console.log('Record Saved Successfully!')
         res.redirect('/')
     })
     .catch(err=>console.log('err'))
})
module.exports=router