'use strict';
const ContentMarketing = require('../controllers/ContentMarketingController');
const express = require('express'),
    router = express.Router();

router.get('/contentMarketingList', ContentMarketing.getContentMarketingList);
router.post('/addContentMarketing', ContentMarketing.addContentMarketing);
router.post('/updateContentMarketing/:id', ContentMarketing.updateContentMarketing);

module.exports = router;