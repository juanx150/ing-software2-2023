const MONGOOSE = require("mongoose")
const USER_SCREAM=MONGOOSE.Schema({
    user_name:{type: String,require:true},
    email:{type:String,require:true,unique:true},
    age:{type: Number,require:true},
    address:{
        type: Object,
        require:true,
        city:{type:String, require:true},
        code_zip:{type:String,require:true},
        geolocation:{type:Array,require:true}
    },
});

module.exportsMONGOOSE.Collection("UserCollection")