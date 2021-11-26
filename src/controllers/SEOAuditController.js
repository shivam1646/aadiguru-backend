const { SEOAuditService } = require('./../services/SEOAuditService');
const { SEOAudit } = require('./../models/SEOAudit');
const autoBind = require('auto-bind');
const seoAuditService = new SEOAuditService(
    new SEOAudit().getInstance()
);

class SEOAuditController {

    constructor(service) {
        this.service = service;
        autoBind(this);
    }

    async getSEOAuditList(req, res, next) {
        try {
            const seoAuditList = await this.service.seoAuditList();
            await res.status(200).json(seoAuditList);
        } catch (e) {
            next(e);
        }
    }

    async addSEOAudit(req, res, next) {
        try {
            const addedSEOAuditData = await this.service.addSEOAudit(req.body);
            await res.status(200).json(addedSEOAuditData);
        } catch (e) {
            next(e);
        }
    }

    async updateSEOAudit(req, res, next) {
        try {
            const updatedSEOAuditData = await this.service.updateSEOAudit(req.params.id, req.body);
            await res.status(200).json(updatedSEOAuditData);
        } catch (e) {
            next(e);
        }
    }
}

module.exports = new SEOAuditController(seoAuditService);