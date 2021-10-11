const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const applicantSchema = new Schema({
  name: {
    type: String,
    required: true,
    unique:true
  },
  address: {
    type: String,
    required: true, 
  },
  dateofbirth: {
    type: Date,
    required: true
  },
  address: {
    type: string,
    required: true
  },
  contact: {
    type: string,
    required: true
  },
    password: {
    type: String,
    required: true
  },
}, { timestamps: true });

const Applicant = mongoose.model('Applicant', applicantSchema);
module.exports = Applicant;