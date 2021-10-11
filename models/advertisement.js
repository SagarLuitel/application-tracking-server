const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const advertisementSchema = new Schema({
  jobTitle: {
    type: String,
    required: true,
  },
  desc: {
    type: String,
    required: true, 
  },
  photo: {
    type: String,
    required: false
  },
  requiremnets: {
    type: String,
    required: true
  },
}, { timestamps: true });

const Advertisement = mongoose.model('Advertisement', advertisementSchema);
module.exports = Advertisement;