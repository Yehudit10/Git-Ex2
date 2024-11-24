const express=require("express")
const path=require("path")
const {WriteToLog}=require("./WriteToLog")
const app=express()
const {data}=require("./data")
const PORT=process.env.PORT||6010
app.use(WriteToLog)
app.get('/',(req,res)=>{
    res.send("Home page")
})
app.get('/api/picture',(req,res)=>{
    res.sendFile(path.join(__dirname,"images","img1.jpg"))
})
app.get('/api/html',(req,res)=>{
    res.send("<h1>html page</h1>")
})
app.get('/api/json',(req,res)=>{
    res.json(data)
})

app.listen(PORT,()=>{
    console.log(`server is running on port:${PORT}`)
})