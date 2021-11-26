'use strict';
const SEOAudit = require('../controllers/SEOAuditController');
const express = require('express'),
    router = express.Router();

router.get('/seoAuditList', SEOAudit.getSEOAuditList);
router.post('/addSEOAudit', SEOAudit.addSEOAudit);
router.post('/updateSEOAudit/:id', SEOAudit.updateSEOAudit);

module.exports = router;