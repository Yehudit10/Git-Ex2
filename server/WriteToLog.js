const fs=require("fs")
const path=require("path")
const {v4:uuid}=require("uuid")
const {format}=require("date-fns")
const WriteToLog=(req,res,next)=>{
     fs.appendFile(path.join(__dirname,"log.txt"),`${req.method} ${req.headers.origin} ${req.path} ${uuid()} ${format(new Date(),"yyyy/MM/dd\t HH:mm:ss")}\n`,(err)=>{if(err) throw err})
    next()
}
module.exports={WriteToLog}