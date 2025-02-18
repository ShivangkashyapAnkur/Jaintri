// controllers/patientController.js
const Patient = require('../models/Patient');

exports.addPatient = async (req, res) => {
  const { name, age, gender, userId } = req.body;

  try {
    const patient = new Patient({ name, age, gender, userId });
    await patient.save();
    res.status(201).json({ message: 'Patient added successfully' });
  } catch (err) {
    res.status(500).json({ message: 'Error adding patient' });
  }
};

exports.getPatient = async (req, res) => {
  const { id } = req.params;

  try {
    const patient = await Patient.findById(id);
    if (!patient) {
      return res.status(404).json({ message: 'Patient not found' });
    }
    res.status(200).json(patient);
  } catch (err) {
    res.status(500).json({ message: 'Error retrieving patient' });
  }
};