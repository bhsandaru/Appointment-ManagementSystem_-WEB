const { date, string } = require('joi');
const mongoose =  require('mongoose');

const Schema = mongoose.Schema;

const appointmentSchema = new Schema({

    appointmentNo: {
        type : String,
        required : false
    },

    maker: {
        type : String,
        required : false
    },
    seeker: {
        type : String,
        required : false
    },
    subject: {
        type : String,
        required : true
    },
    date: {
        type : String,
        required : false
    },
    time: {
        type : String,
        required : false
    }
})

const Appointment = mongoose.model("appointment",appointmentSchema);

module.exports = Appointment;