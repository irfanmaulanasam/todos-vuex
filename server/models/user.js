import { Mongoose } from "mongoose";

const Schema = Mongoose.Schema

const userSchema = new Schema ({
    username:{
        type:String,
        required:[true,'username have empty value']
    },
    email:{
        type:String,
        required:[true,'email have empty value'],
        validate:{
            validator: function(email) {
                return /[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$/.test(email);
            },
            message: 'Email not valid'
        } 
    }
})