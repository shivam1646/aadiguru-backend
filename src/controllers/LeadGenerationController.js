const { LeadGenerationService } = require('./../services/LeadGenerationService');
const { LeadGeneration } = require('./../models/LeadGeneration');
const autoBind = require('auto-bind');
const leadGenerationService = new LeadGenerationService(
    new LeadGeneration().getInstance()
);

class LeadGenerationController {

    constructor(service) {
        this.service = service;
        autoBind(this);
    }

    async getLeadGenerationList(req, res, next) {
        try {
            const leadGenerationList = await this.service.leadGenerationList();
            await res.status(200).json(leadGenerationList);
        } catch (e) {
            next(e);
        }
    }

    async addLeadGeneration(req, res, next) {
        try {
            const addedLeadGenerationData = await this.service.addLeadGeneration(req.body);
            await res.status(200).json(addedLeadGenerationData);
        } catch (e) {
            next(e);
        }
    }

    async updateLeadGeneration(req, res, next) {
        try {
            const updatedLeadGenerationData = await this.service.updateLeadGeneration(req.params.id, req.body);
            await res.status(200).json(updatedLeadGenerationData);
        } catch (e) {
            next(e);
        }
    }
}

module.exports = new LeadGenerationController(leadGenerationService);