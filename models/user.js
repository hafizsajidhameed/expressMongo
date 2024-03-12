import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const userSchema = new Schema({
    name:{
        type:String,
        require:true
    },
    email:{
        type: String,
        require: true,
        unique: ture
    },
    password:{
        type: String,
        require: true,
        minlenght: 6
    }
});

export default mongoose.model('User', userSchema);