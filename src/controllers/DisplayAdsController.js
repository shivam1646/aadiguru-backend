const { DisplayAdsService } = require('./../services/DisplayAdsService');
const { DisplayAds } = require('./../models/DisplayAds');
const autoBind = require('auto-bind');
const displayAdsService = new DisplayAdsService(
    new DisplayAds().getInstance()
);

class DisplayAdsController {

    constructor(service) {
        this.service = service;
        autoBind(this);
    }

    async getDisplayAdsList(req, res, next) {
        try {
            const displayAdsList = await this.service.displayAdsList();
            await res.status(200).json(displayAdsList);
        } catch (e) {
            next(e);
        }
    }

    async addDisplayAds(req, res, next) {
        try {
            const addedDisplayAdsData = await this.service.addDisplayAds(req.body);
            await res.status(200).json(addedDisplayAdsData);
        } catch (e) {
            next(e);
        }
    }

    async updateDisplayAds(req, res, next) {
        try {
            const updatedDisplayAdsData = await this.service.updateDisplayAds(req.params.id, req.body);
            await res.status(200).json(updatedDisplayAdsData);
        } catch (e) {
            next(e);
        }
    }
}

module.exports = new DisplayAdsController(displayAdsService);