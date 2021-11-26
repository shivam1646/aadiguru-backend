const { TechnicalSEOService } = require('./../services/TechnicalSEOService');
const { TechnicalSEO } = require('./../models/TechnicalSEO');
const autoBind = require('auto-bind');
const technicalSEOService = new TechnicalSEOService(
    new TechnicalSEO().getInstance()
);

class TechnicalSEOController {

    constructor(service) {
        this.service = service;
        autoBind(this);
    }

    async getTechnicalSEOList(req, res, next) {
        try {
            const technicalSEOList = await this.service.technicalSEOList();
            await res.status(200).json(technicalSEOList);
        } catch (e) {
            next(e);
        }
    }

    async addTechnicalSEO(req, res, next) {
        try {
            const addedTechnicalSEOData = await this.service.addTechnicalSEO(req.body);
            await res.status(200).json(addedTechnicalSEOData);
        } catch (e) {
            next(e);
        }
    }

    async updateTechnicalSEO(req, res, next) {
        try {
            const updatedTechnicalSEOData = await this.service.updateTechnicalSEO(req.params.id, req.body);
            await res.status(200).json(updatedTechnicalSEOData);
        } catch (e) {
            next(e);
        }
    }
}

module.exports = new TechnicalSEOController(technicalSEOService);