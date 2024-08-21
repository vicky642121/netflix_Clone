// import express from "express";
const express = require('express');
const dotenv = require('dotenv');
const databasConnection = require('../netflixc_backend/utils/database.js');
const cookieParser = require('cookie-parser');
const userRouter = require('./routes/userRouter.js');
const cors = require('cors');

//database connection
databasConnection();
dotenv.config({
    path:".env"
})

//server connection
const app = express();
app.use(express.urlencoded({extended:true}))
app.use(express.json());
app.use(cookieParser());

const corsOptions = {
    origin:'http://localhost:3000',
    credentials:true,
}

app.use(cors(corsOptions));
//api
app.use('/api/v1/user',userRouter);

const PORT = process.env.PORT || 5000;

app.listen(PORT,()=>{
    console.log(`server listening port ${PORT}`)
});