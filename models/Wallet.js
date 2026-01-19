const mongoose = require('mongoose');

const walletSchema = new mongoose.Schema({
    depositWallet: {
        type: Number,
        default: 0
    },
    winningWallet: {
        type: Number,
        default: 0
    },
    bonusWallet: {
        type: Number,
        default: 0
    }
});

module.exports = mongoose.model('Wallet', walletSchema);