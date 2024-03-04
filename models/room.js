const mongoose=require("mongoose");

const roomSchema=mongoose.Schema({
    name: {
        type: String,
        required : true
    },
    maxcount:{
        type: Number,
        require:true
    },
    phonenumber:{
        type:Number,
        require:true
    },
    rentalperday:{
        type:Number,
        require:true
    },
    imageurls : [],
    currentbookings : [],
    type:{
        type:String,
        required:true
    },
    decription:{
        type:String,
        required:true
    }
},{
        timestamps:true,
    }
)

const roomModel=mongoose.model('rooms',roomSchema)
module.exports=roomModel;