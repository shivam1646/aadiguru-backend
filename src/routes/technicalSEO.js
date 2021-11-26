'use strict';
const TechnicalSEO = require('../controllers/TechnicalSEOController');
const express = require('express'),
    router = express.Router();

router.get('/technicalSEOList', TechnicalSEO.getTechnicalSEOList);
router.post('/addTechnicalSEO', TechnicalSEO.addTechnicalSEO);
router.post('/updateTechnicalSEO/:id', TechnicalSEO.updateTechnicalSEO);

module.exports = router;