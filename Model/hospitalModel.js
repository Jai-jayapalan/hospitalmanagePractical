const mongoose = require('mongoose');

const hospitalSchema = mongoose.Schema({
    patientName : {
        type:String,
        required:true
    },
    patientID :{
        type:String,
        required:true,
        unique:true,
        index: true
    },
    patientAge : {
        type:String,
        required:true
    },
    patientGender: {
        type: String,
        enum: ['Male', 'Female', 'Other'],
        required: true
      },
    patientCity: {
        type: String,
        required: true
      },
    patientMobile: {
        type: String,
        required: true,
        unique:true
      },
    patientEmail: {
        type: String,
        required: true,
        unique:true
      }
})

const hospitalModel = mongoose.model('hospital',hospitalSchema)

module.exports = hospitalModel