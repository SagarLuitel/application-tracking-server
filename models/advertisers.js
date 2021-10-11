const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const advertiserSchema = new Schema({
  companyName: {
    type: String,
    required: true,
    unique:true
  },
  desc: {
    type: String,
    required: true, 
  },
  photo: {
    type: String,
    required: false
  },
}, { timestamps: true });

const Advertiser = mongoose.model('Blog', advertiserSchema);
module.exports = Advertiser;