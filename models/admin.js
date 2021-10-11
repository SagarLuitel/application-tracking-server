const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const adminSchema = new Schema({
  email: {
    type: String,
    required: true,
    unique:true
  },
  password: {
    type: String,
    required: true, 
  },
  photo: {
    type: String,
    required: false
  },
}, { timestamps: true });

const Admin = mongoose.model('Admin', adminSchema);
module.exports = Admin;