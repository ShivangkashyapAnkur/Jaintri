// routes/patientRoutes.js
const express = require('express');
const { addPatient, getPatient } = require('../controllers/patientController');

const router = express.Router();

router.post('/patients', addPatient);
router.get('/patients/:id', getPatient);

module.exports = router;