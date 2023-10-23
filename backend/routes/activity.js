const express = require('express');
const { createActivity, joinActivity, forfeitActivity, cancelActivity } = require('../controllers/activity');
const { getAgenda, searchActivities, getMyActivities } = require('../middlewares/activity');

const router = express.Router();

router.post('/create', createActivity);
router.post('/join', joinActivity);
router.post('/forfeit', forfeitActivity);
router.post('/cancel', cancelActivity);
router.post('/agenda', getAgenda, (req, res) => { //next
    res.json(req.items);
  });
 router.post('/search', searchActivities, (req, res) => { //next
    res.json(req.items);
  });
router.post('/myact', getMyActivities, (req, res) => { //next
    res.json(req.items);
  });

module.exports = router;