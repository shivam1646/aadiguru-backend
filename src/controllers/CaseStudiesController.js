const { CaseStudiesService } = require('./../services/CaseStudiesService');
const { CaseStudies } = require('./../models/CaseStudies');
const autoBind = require('auto-bind');
const caseStudiesService = new CaseStudiesService(
    new CaseStudies().getInstance()
);

class CaseStudiesController {

    constructor(service) {
        this.service = service;
        autoBind(this);
    }

    async getCaseStudiesList(req, res, next) {
        try {
            const caseStudiesList = await this.service.caseStudiesList();
            await res.status(200).json(caseStudiesList);
        } catch (e) {
            next(e);
        }
    }

    async addCaseStudies(req, res, next) {
        try {
            const addedCaseStudiesData = await this.service.addCaseStudies(req.body);
            await res.status(200).json(addedCaseStudiesData);
        } catch (e) {
            next(e);
        }
    }

    async updateCaseStudies(req, res, next) {
        try {
            const updatedCaseStudiesData = await this.service.updateCaseStudies(req.params.id, req.body);
            await res.status(200).json(updatedCaseStudiesData);
        } catch (e) {
            next(e);
        }
    }
}

module.exports = new CaseStudiesController(caseStudiesService);