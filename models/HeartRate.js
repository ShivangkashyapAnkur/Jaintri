// models/HeartRate.js
const mongoose = require('mongoose');

const heartRateSchema = new mongoose.Schema({
  patientId: { type: mongoose.Schema.Types.ObjectId, ref: 'Patient', required: true }, // Link to Patient
  heartRate: { type: Number, required: true },
  timestamp: { type: Date, default: Date.now },
});

module.exports = mongoose.model('HeartRate', heartRateSchema);