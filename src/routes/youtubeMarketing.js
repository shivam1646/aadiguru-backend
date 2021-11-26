'use strict';
const YoutubeMarketing = require('../controllers/YoutubeMarketingController');
const express = require('express'),
    router = express.Router();

router.get('/youtubeMarketingList', YoutubeMarketing.getYoutubeMarketingList);
router.post('/addYoutubeMarketing', YoutubeMarketing.addYoutubeMarketing);
router.post('/updateYoutubeMarketing/:id', YoutubeMarketing.updateYoutubeMarketing);

module.exports = router;