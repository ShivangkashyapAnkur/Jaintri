// app.js
const express = require('express');
const mongoose = require('mongoose');
const userRoutes = require('./routes/userRoutes');
const patientRoutes = require('./routes/patientRoutes');
const heartRateRoutes = require('./routes/heartRateRoutes');
const errorHandler = require('./utils/errorHandler');

const app = express();

// Middleware
app.use(express.json());

// Routes
app.use('/api', userRoutes);
app.use('/api', patientRoutes);
app.use('/api', heartRateRoutes);

// Error handling
app.use(errorHandler);

// Database connection
mongoose.connect('mongodb://localhost:27017/patient-monitoring', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

module.exports = app;