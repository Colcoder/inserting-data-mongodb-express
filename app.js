const express = require('express');
const path = require('path');
const adminRoute = require('./routes/adminRoute')

 const app = express();

 //serve up index
 app.get('/',(req,res)=>{
     res.sendFile(path.join(__dirname, '/views/index.html'))
 });

 //routes
 app.use('/admin',adminRoute)

 //server
 app.listen(3000,()=>{
     console.log('server running on port 3000...')
 })