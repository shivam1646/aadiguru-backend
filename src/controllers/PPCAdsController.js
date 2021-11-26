const { PPCAdsService } = require('./../services/PPCAdsService');
const { PPCAds } = require('./../models/PPCAds');
const autoBind = require('auto-bind');
const ppcAdsService = new PPCAdsService(
    new PPCAds().getInstance()
);

class PPCAdsController {

    constructor(service) {
        this.service = service;
        autoBind(this);
    }

    async getPPCAdsList(req, res, next) {
        try {
            const ppcAdsList = await this.service.ppcAdsList();
            await res.status(200).json(ppcAdsList);
        } catch (e) {
            next(e);
        }
    }

    async addPPCAds(req, res, next) {
        try {
            const addedPPCAdsData = await this.service.addPPCAds(req.body);
            await res.status(200).json(addedPPCAdsData);
        } catch (e) {
            next(e);
        }
    }

    async updatePPCAds(req, res, next) {
        try {
            const updatedPPCAdsData = await this.service.updatePPCAds(req.params.id, req.body);
            await res.status(200).json(updatedPPCAdsData);
        } catch (e) {
            next(e);
        }
    }
}

module.exports = new PPCAdsController(ppcAdsService);