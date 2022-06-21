const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const productsSchema = new Schema({
    p_name:{
        type:String,
        required:true
    },
    p_details:{
        type:String,
        required:true,
    },
    p_warranty:String,
    p_cost:Number,
    p_image:String
   },
   {
    timestamps:true
  }
);

module.exports= mongoose.model('PRODUCTS',productsSchema);