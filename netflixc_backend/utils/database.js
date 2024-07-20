const mongoose = require('mongoose');
require('dotenv').config();


const databasConnection = ()=>{

    mongoose.connect(process.env.MONGOURI).then(()=>{

        console.log('Mongodb connected successfully');
    }).catch((error)=>{

        console.log(error);
    });
}


module.exports = databasConnection;