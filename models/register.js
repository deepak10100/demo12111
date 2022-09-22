const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const registerSchema = new Schema({
    fname: { type: String,},
    lname: { type: String,},
    email: { type: String,},
    pass: { type: String, },
    cpass: { type: String,},
    date: { type: Date, default: Date.now },
});
const Register = mongoose.model('Register', registerSchema);
module.exports=Register