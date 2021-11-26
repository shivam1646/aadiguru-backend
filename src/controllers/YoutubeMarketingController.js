const { YoutubeMarketingService } = require('./../services/YoutubeMarketingService');
const { YoutubeMarketing } = require('./../models/YoutubeMarketing');
const autoBind = require('auto-bind');
const youtubeMarketingService = new YoutubeMarketingService(
    new YoutubeMarketing().getInstance()
);

class YoutubeMarketingController {

    constructor(service) {
        this.service = service;
        autoBind(this);
    }

    async getYoutubeMarketingList(req, res, next) {
        try {
            const youtubeMarketingList = await this.service.youtubeMarketingList();
            await res.status(200).json(youtubeMarketingList);
        } catch (e) {
            next(e);
        }
    }

    async addYoutubeMarketing(req, res, next) {
        try {
            const addedYoutubeMarketingData = await this.service.addYoutubeMarketing(req.body);
            await res.status(200).json(addedYoutubeMarketingData);
        } catch (e) {
            next(e);
        }
    }

    async updateYoutubeMarketing(req, res, next) {
        try {
            const updatedYoutubeMarketingData = await this.service.updateYoutubeMarketing(req.params.id, req.body);
            await res.status(200).json(updatedYoutubeMarketingData);
        } catch (e) {
            next(e);
        }
    }
}

module.exports = new YoutubeMarketingController(youtubeMarketingService);