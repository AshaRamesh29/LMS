const express = require('express')
const app = express();
const port = 4000;
const userRouter = require('./Routers/user')
app.use(express.json())
app.use(userRouter)
app.listen(port,()=>{
    console.log('app is listening the port 4000',port)
})