const mongoose = require('mongoose');

const battleSchema = new mongoose.Schema({
  battleId: { type: String, required: true, unique: true },
  createdBy: { type: String, required: true },
  joinedBy: { type: [String], default: [] },
  amount: { type: Number, required: true },
  status: { type: String, required: true },
  roomCode: { type: String, required: true },
  screenshots: { type: [String], default: [] },
  claims: { type: [String], default: [] },
  winner: { type: String, default: null },
  commission: { type: Number, required: true },
  isBotBattle: { type: Boolean, default: false },
  autoCancelAt: { type: Date, required: true },
  resultDeclaredBy: { type: String, default: null },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now }
});

const Battle = mongoose.model('Battle', battleSchema);

module.exports = Battle;