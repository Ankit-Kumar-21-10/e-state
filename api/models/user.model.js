import mongoose from "mongoose";

const userSchema=new mongoose.Schema(
    {
        username:{
            type:String,
            required:true,
            unique:true
        },
        email:{
            type:String,
            required:true,
            unique:true
        },
        password:{
            type:String,
            required:true,
        },
        avatar:{
            type:String,
            default:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTxCJpx7clGqaBABXxtj_Nj7Y4LF2cgzJr7RZlQx8M_PyTD5KCR8uF7FzPExQfyS_JDaE8&usqp=CAU",
            
        },

    },{timestamps:true}
);

const User=mongoose.model('User',userSchema);
export default User;