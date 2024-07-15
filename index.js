require('dotenv').config()
const express= require('express');
const mongoose = require('mongoose');
const app=express();
const PORT=process.env.PORT|8000
const userRoutes=require('./routes/userRoutes')
const crudRoutes=require('./routes/crudRoutes');


app.use(express.json());

mongoose.connect(process.env.MONGODB_URL)

app.use(userRoutes);
app.use(crudRoutes);



app.listen(PORT,()=>console.log(`Server started at port:${PORT}`));