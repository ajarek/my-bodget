const mongoose=require('mongoose')
const Budget = new mongoose.Schema({
    
    dateOperation:{
        type:Date,
        required:true
    },
    income:{
        type:String,
        required:true
    },
    expenses:{
        type:String,
        required:true
    },
    description:{
        type:String,
        required:true
    },    
})
module.exports = new mongoose.model('myBodget',Budget)