const express = require('express');
const router = express.Router();

const homeRoute = require('./product');
const { urlencoded, json } = require('body-parser');

router.use(urlencoded({ extended: false }));
router.use(json());

router.use('/', homeRoute);

module.exports = router;
