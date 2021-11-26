const { LocalAdsService } = require('./../services/LocalAdsService');
const { LocalAds } = require('./../models/LocalAds');
const autoBind = require('auto-bind');
const localAdsService = new LocalAdsService(
    new LocalAds().getInstance()
);

class LocalAdsController {

    constructor(service) {
        this.service = service;
        autoBind(this);
    }

    async getLocalAdsList(req, res, next) {
        try {
            const localAdsList = await this.service.localAdsList();
            await res.status(200).json(localAdsList);
        } catch (e) {
            next(e);
        }
    }

    async addLocalAds(req, res, next) {
        try {
            const addedLocalAdsData = await this.service.addLocalAds(req.body);
            await res.status(200).json(addedLocalAdsData);
        } catch (e) {
            next(e);
        }
    }

    async updateLocalAds(req, res, next) {
        try {
            const updatedLocalAdsData = await this.service.updateLocalAds(req.params.id, req.body);
            await res.status(200).json(updatedLocalAdsData);
        } catch (e) {
            next(e);
        }
    }
}

module.exports = new LocalAdsController(localAdsService);