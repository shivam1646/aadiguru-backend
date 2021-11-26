'use strict';
const { Service } = require('../../system/services/Service');
const autoBind = require('auto-bind');

class SEOAuditService extends Service {
    constructor(model) {
        super(model);
        this.model = model;
        autoBind(this);
    }

    async seoAuditList() {
        try {
            return await this.model.findlist();
        } catch (errors) {
            throw errors;
        }
    } 

    async addSEOAudit(data) {
        try {
            return await this.insert(data);
        } catch (error) {
            throw error;
        }
    }

    async updateSEOAudit(id, data) {
        try {
            return await this.update(id, data);
        } catch (error) {
            throw error;
        }
    }
}

module.exports = { SEOAuditService };