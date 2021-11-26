'use strict';
const LeadGeneration = require('../controllers/LeadGenerationController');
const express = require('express'),
    router = express.Router();

router.get('/leadGenerationList', LeadGeneration.getLeadGenerationList);
router.post('/addLeadGeneration', LeadGeneration.addLeadGeneration);
router.post('/updateLeadGeneration/:id', LeadGeneration.updateLeadGeneration);

module.exports = router;