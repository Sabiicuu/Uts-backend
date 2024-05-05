const mongoose=require("mongoose")

mongoose.connect("mongodb+srv://lekreylaipiopa29:glMN6fyOj98jClI2@cluster0.okgyhkz.mongodb.net/")
.then(()=>{
    console.log('database log/sign connected');
})
.catch((e)=>{
    console.log('failed');
})

const logInSchema=new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    }
})

const LogInCollection=new mongoose.model('LogInCollection',logInSchema)

module.exports=LogInCollection
