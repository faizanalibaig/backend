require('dotenv').config();
const express= require('express');
const app=express();

app.get('/hello', (req, res)=>{
    res.send('Hello World')
})

app.get('/', (req, res)=>{
    res.send('Home')
})

app.listen(process.env.port, ()=>{
   console.log(`${process.env.port}`)
})
