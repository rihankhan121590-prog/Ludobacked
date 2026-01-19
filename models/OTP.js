const mongoose = require('mongoose');

const otpSchema = new mongoose.Schema({
    mobileNumber: {
        type: String,
        unique: true,
        required: true,
    },
    otp: {
        type: String,
        required: true,
    },
    expiresAt: {
        type: Date,
        required: true,
    },
    attempts: {
        type: Number,
        default: 0,
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
});

const OTP = mongoose.model('OTP', otpSchema);

module.exports = OTP;