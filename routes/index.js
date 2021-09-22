const router = require('express').Router()
const Budget = require('../models/Budget')
const mysort = { dateOperation:1}

router.get('/',async(req,res)=>{
    const allRecord=await Budget.find({}).sort(mysort)
    res.render('displayBodget',{budgets:allRecord}) 
})
module.exports=router