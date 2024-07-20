// import express from "express";
const express = require('express');
const dotenv = require('dotenv');
const databasConnection = require('../netflixc_backend/utils/database.js');
const cookieParser = require('cookie-parser');

//database connection
databasConnection();
dotenv.config({
    path:".env"
})

//server connection
const app = express();
app.use(express.urlencoded({extended:true}))
app.use(express.json());
app.use(cookieParser);

const PORT = process.env.PORT || 5000;

app.listen(PORT,()=>{
    console.log(`server listening port ${PORT}`)
});