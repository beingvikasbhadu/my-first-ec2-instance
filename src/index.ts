import express from 'express';
const app = express();
const port = 3000;

app.get('/',(req:any,res:any)=>{
    res.send("HI From Ec2!")
})

app.listen(3000);
