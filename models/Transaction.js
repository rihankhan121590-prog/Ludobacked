const mongoose = require('mongoose');

const transactionSchema = new mongoose.Schema({
    userId: { type: String, required: true },
    type: { type: String, enum: ['deposit', 'withdrawal', 'battle_created', 'battle_joined', 'battle_won', 'battle_lost', 'battle_refund', 'referral_earning', 'admin_adjustment', 'bonus'], required: true },
    amount: { type: Number, required: true },
    walletType: { type: String, enum: ['deposit', 'winning', 'bonus'], required: true },
    balanceBefore: { type: Number, required: true },
    balanceAfter: { type: Number, required: true },
    transactionId: { type: String, required: true, unique: true },
    relatedBattle: { type: mongoose.Schema.Types.ObjectId, ref: 'Battle' },
    relatedUser: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    adminNote: { type: String },
    status: { type: String, enum: ['pending', 'completed', 'failed'], required: true },
    createdAt: { type: Date, default: Date.now }
});

const Transaction = mongoose.model('Transaction', transactionSchema);

module.exports = Transaction;