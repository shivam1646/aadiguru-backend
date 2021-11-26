'use strict';
const CaseStudies = require('../controllers/CaseStudiesController');
const express = require('express'),
    router = express.Router();

router.get('/caseStudiesList', CaseStudies.getCaseStudiesList);
router.post('/addCaseStudies', CaseStudies.addCaseStudies);
router.post('/updateCaseStudies/:id', CaseStudies.updateCaseStudies);

module.exports = router;