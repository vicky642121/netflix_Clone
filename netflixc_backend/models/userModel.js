const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({

    fullname:{
        type:String,
        require:true
    },
    email:{
        type:String,
        require:true
    },
    password:{
        type:String,
        require:true
    }
},{    
    timestamps: true,
    underscored: true,
    createdAt: "created_at",
    updatedAt: "updated_at",
});

module.exports = mongoose.model("User",userSchema);