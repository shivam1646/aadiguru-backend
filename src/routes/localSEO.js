'use strict';
const LocalSEO = require('../controllers/LocalSEOController');
const express = require('express'),
    router = express.Router();

router.get('/localSEOList', LocalSEO.getLocalSEOList);
router.post('/addLocalSEO', LocalSEO.addLocalSEO);
router.post('/updateLocalSEO/:id', LocalSEO.updateLocalSEO);

module.exports = router;