const mongoose = require('mongoose');

const ActiveUserSchema = new mongoose.Schema({
  isActive: {type :Number , required:true },
  companyName:{type:String,require:true},
  
  },{timestamps:true});


  export default mongoose.models.ActiveUser ||mongoose.model("ActiveUser",ActiveUserSchema);
