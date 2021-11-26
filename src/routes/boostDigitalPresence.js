'use strict';
const BoostDigitalPresence = require('../controllers/BoostDigitalPresenceController');
const express = require('express'),
    router = express.Router();

router.get('/boostDigitalPresenceList', BoostDigitalPresence.getBoostDigitalPresenceList);
router.post('/addBoostDigitalPresence', BoostDigitalPresence.addBoostDigitalPresence);
router.post('/updateBoostDigitalPresence/:id', BoostDigitalPresence.updateBoostDigitalPresence);

module.exports = router;