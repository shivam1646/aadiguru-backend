'use strict';
const { Service } = require('../../system/services/Service');
const autoBind = require('auto-bind');

class CaseStudiesService extends Service {
    constructor(model) {
        super(model);
        this.model = model;
        autoBind(this);
    }

    async caseStudiesList() {
        try {
            return await this.model.findlist();
        } catch (errors) {
            throw errors;
        }
    } 

    async addCaseStudies(data) {
        try {
            return await this.insert(data);
        } catch (error) {
            throw error;
        }
    }

    async updateCaseStudies(id, data) {
        try {
            return await this.update(id, data);
        } catch (error) {
            throw error;
        }
    }
}

module.exports = { CaseStudiesService };
