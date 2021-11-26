'use strict';
const LocalAds = require('../controllers/LocalAdsController');
const express = require('express'),
    router = express.Router();

router.get('/localAdsList', LocalAds.getLocalAdsList);
router.post('/addLocalAds', LocalAds.addLocalAds);
router.post('/updateLocalAds/:id', LocalAds.updateLocalAds);

module.exports = router;