const { LocalSEOService } = require('./../services/LocalSEOService');
const { LocalSEO } = require('./../models/LocalSEO');
const autoBind = require('auto-bind');
const localSEOService = new LocalSEOService(
    new LocalSEO().getInstance()
);

class LocalSEOController {

    constructor(service) {
        this.service = service;
        autoBind(this);
    }

    async getLocalSEOList(req, res, next) {
        try {
            const localSEOList = await this.service.localSEOList();
            await res.status(200).json(localSEOList);
        } catch (e) {
            next(e);
        }
    }

    async addLocalSEO(req, res, next) {
        try {
            const addedLocalSEOData = await this.service.addLocalSEO(req.body);
            await res.status(200).json(addedLocalSEOData);
        } catch (e) {
            next(e);
        }
    }

    async updateLocalSEO(req, res, next) {
        try {
            const updatedLocalSEOData = await this.service.updateLocalSEO(req.params.id, req.body);
            await res.status(200).json(updatedLocalSEOData);
        } catch (e) {
            next(e);
        }
    }
}

module.exports = new LocalSEOController(localSEOService);