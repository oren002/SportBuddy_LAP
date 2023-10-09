const express = require('express');
const { createActivity } = require('../controllers/activity');

const router = express.Router();

router.post('/create', createActivity);

module.exports = router;