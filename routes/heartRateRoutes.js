// routes/heartRateRoutes.js
const express = require('express');
const { recordHeartRate, getHeartRate } = require('../controllers/heartRateController');

const router = express.Router();

router.post('/heart-rate', recordHeartRate);
router.get('/heart-rate/:patientId', getHeartRate);

module.exports = router;