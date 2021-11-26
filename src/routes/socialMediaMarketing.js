'use strict';
const SocialMediaMarketing = require('../controllers/SocialMediaMarketingController');
const express = require('express'),
    router = express.Router();

router.get('/socialMediaMarketingList', SocialMediaMarketing.getSocialMediaMarketingList);
router.post('/addSocialMediaMarketing', SocialMediaMarketing.addSocialMediaMarketing);
router.post('/updateSocialMediaMarketing/:id', SocialMediaMarketing.updateSocialMediaMarketing);

module.exports = router;