'use strict';
const DisplayAds = require('../controllers/DisplayAdsController');
const express = require('express'),
    router = express.Router();

router.get('/displayAdsList', DisplayAds.getDisplayAdsList);
router.post('/addDisplayAds', DisplayAds.addDisplayAds);
router.post('/updateDisplayAds/:id', DisplayAds.updateDisplayAds);

module.exports = router;