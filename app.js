const express=require('express');
const cors=require('cors');
const app=express();

app.use(cors());

app.post('/api/product',()=>{
   res.send('working');
})
