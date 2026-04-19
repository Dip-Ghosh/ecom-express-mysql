const express = require('express');
const homeRoute = require('./home');
const router = express.Router();

router.use('/', homeRoute);

module.exports = router;
