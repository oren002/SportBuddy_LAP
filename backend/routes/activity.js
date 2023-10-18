const express = require('express');
const { createActivity, joinActivity, forfeitActivity } = require('../controllers/activity');
const { getAgenda, searchActivities } = require('../middlewares/activity');

const router = express.Router();

router.post('/create', createActivity);
router.post('/join', joinActivity);
router.post('/forfeit', forfeitActivity);
router.post('/agenda', getAgenda, (req, res) => { //next
    res.json(req.items);
  });
 router.post('/search', searchActivities, (req, res) => { //next
    res.json(req.items);
  });

module.exports = router;