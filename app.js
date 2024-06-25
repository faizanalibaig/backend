const express=require('express');
const cors=require('cors');
const app=express();

app.use(cors());

app.post('/api/product',(req, res)=>{
   res.send('working');
})

app.get('/message',(req, res)=>{
   res.send('message');
})

