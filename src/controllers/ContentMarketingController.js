const { ContentMarketingService } = require('./../services/ContentMarketingService');
const { ContentMarketing } = require('./../models/ContentMarketing');
const autoBind = require('auto-bind');
const contentMarketingService = new ContentMarketingService(
    new ContentMarketing().getInstance()
);

class ContentMarketingController {

    constructor(service) {
        this.service = service;
        autoBind(this);
    }

    async getContentMarketingList(req, res, next) {
        try {
            const contentMarketingList = await this.service.contentMarketingList();
            await res.status(200).json(contentMarketingList);
        } catch (e) {
            next(e);
        }
    }

    async addContentMarketing(req, res, next) {
        try {
            const addedContentMarketingData = await this.service.addContentMarketing(req.body);
            await res.status(200).json(addedContentMarketingData);
        } catch (e) {
            next(e);
        }
    }

    async updateContentMarketing(req, res, next) {
        try {
            const updatedContentMarketingData = await this.service.updateContentMarketing(req.params.id, req.body);
            await res.status(200).json(updatedContentMarketingData);
        } catch (e) {
            next(e);
        }
    }
}

module.exports = new ContentMarketingController(contentMarketingService);