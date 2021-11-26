'use strict';
const EmailMarketing = require('../controllers/EmailMarketingController');
const express = require('express'),
    router = express.Router();

router.get('/emailMarketingList', EmailMarketing.getEmailMarketingList);
router.post('/addEmailMarketing', EmailMarketing.addEmailMarketing);
router.post('/updateEmailMarketing/:id', EmailMarketing.updateEmailMarketing);

module.exports = router;