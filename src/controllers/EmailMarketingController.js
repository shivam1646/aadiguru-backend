const { EmailMarketingService } = require('./../services/EmailMarketingService');
const { EmailMarketing } = require('./../models/EmailMarketing');
const autoBind = require('auto-bind');
const emailMarketingService = new EmailMarketingService(
    new EmailMarketing().getInstance()
);

class EmailMarketingController {

    constructor(service) {
        this.service = service;
        autoBind(this);
    }

    async getEmailMarketingList(req, res, next) {
        try {
            const emailMarketingList = await this.service.emailMarketingList();
            await res.status(200).json(emailMarketingList);
        } catch (e) {
            next(e);
        }
    }

    async addEmailMarketing(req, res, next) {
        try {
            const addedEmailMarketingData = await this.service.addEmailMarketing(req.body);
            await res.status(200).json(addedEmailMarketingData);
        } catch (e) {
            next(e);
        }
    }

    async updateEmailMarketing(req, res, next) {
        try {
            const updatedEmailMarketingData = await this.service.updateEmailMarketing(req.params.id, req.body);
            await res.status(200).json(updatedEmailMarketingData);
        } catch (e) {
            next(e);
        }
    }
}

module.exports = new EmailMarketingController(emailMarketingService);