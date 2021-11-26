const { SocialMediaMarketingService } = require('./../services/SocialMediaMarketingService');
const { SocialMediaMarketing } = require('./../models/SocialMediaMarketing');
const autoBind = require('auto-bind');
const socialMediaMarketingService = new SocialMediaMarketingService(
    new SocialMediaMarketing().getInstance()
);

class SocialMediaMarketingController {

    constructor(service) {
        this.service = service;
        autoBind(this);
    }

    async getSocialMediaMarketingList(req, res, next) {
        try {
            const socialMediaMarketingList = await this.service.socialMediaMarketingList();
            await res.status(200).json(socialMediaMarketingList);
        } catch (e) {
            next(e);
        }
    }

    async addSocialMediaMarketing(req, res, next) {
        try {
            const addedSocialMediaMarketingData = await this.service.addSocialMediaMarketing(req.body);
            await res.status(200).json(addedSocialMediaMarketingData);
        } catch (e) {
            next(e);
        }
    }

    async updateSocialMediaMarketing(req, res, next) {
        try {
            const updatedSocialMediaMarketingData = await this.service.updateSocialMediaMarketing(req.params.id, req.body);
            await res.status(200).json(updatedSocialMediaMarketingData);
        } catch (e) {
            next(e);
        }
    }
}

module.exports = new SocialMediaMarketingController(socialMediaMarketingService);