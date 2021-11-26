'use strict';
const PPCAds = require('../controllers/PPCAdsController');
const express = require('express'),
    router = express.Router();

router.get('/ppcAdsList', PPCAds.getPPCAdsList);
router.post('/addPPCAds', PPCAds.addPPCAds);
router.post('/updatePPCAds/:id', PPCAds.updatePPCAds);

module.exports = router;