const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
  firstName: {type :String , required:true },
  lastName: {type :String , required:true },
  email: {type :String , required:true, unique:true },
  companyName: {type :String , required:true },
  designation: {type :String , required:true },
  techStack: {type :String , required:true},
  department: {type :String , required:true },
  password: {type:String , required:true },
  profileImg: {type:String  },
  
    
    
  },{timestamps:true});


  export default mongoose.models.User ||mongoose.model("User",UserSchema);

