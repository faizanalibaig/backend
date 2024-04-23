require('dotenv').config()
const express= require('express')
const app=express()

app.get('/hello', (req, res)=>{
    res.send('Hello World')
})

app.listen(process.env.port, ()=>{
   console.log(`${process.env.port}`)
})