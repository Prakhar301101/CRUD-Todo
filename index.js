require('dotenv').config()
const express= require('express');
const mongoose = require('mongoose');
const app=express();
const PORT=process.env.PORT|8000
const crudRoutes=require('./routes/Routes');


app.use(express.json());

mongoose.connect(process.env.MONGODB_URL)

app.use(crudRoutes);



app.listen(PORT,()=>console.log(`Server started at port:${PORT}`));