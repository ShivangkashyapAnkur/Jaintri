// controllers/heartRateController.js
const HeartRate = require('../models/HeartRate');

exports.recordHeartRate = async (req, res) => {
  const { patientId, heartRate } = req.body;

  try {
    const heartRateData = new HeartRate({ patientId, heartRate });
    await heartRateData.save();
    res.status(201).json({ message: 'Heart rate recorded successfully' });
  } catch (err) {
    res.status(500).json({ message: 'Error recording heart rate' });
  }
};

exports.getHeartRate = async (req, res) => {
  const { patientId } = req.params;

  try {
    const heartRates = await HeartRate.find({ patientId });
    res.status(200).json(heartRates);
  } catch (err) {
    res.status(500).json({ message: 'Error retrieving heart rate data' });
  }
};