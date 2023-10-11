const express = require('express');
const { createActivity } = require('../controllers/activity');
const { getAgenda } = require('../middlewares/activity');

const router = express.Router();

router.post('/create', createActivity);
router.post('/agenda', getAgenda, (req, res) => { //next
    res.json(req.items);
  });

module.exports = router;