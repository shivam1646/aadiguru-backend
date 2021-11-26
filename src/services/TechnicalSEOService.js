'use strict';
const { Service } = require('../../system/services/Service');
const autoBind = require('auto-bind');

class TechnicalSEOService extends Service {
    constructor(model) {
        super(model);
        this.model = model;
        autoBind(this);
    }

    async technicalSEOList() {
        try {
            return await this.model.findlist();
        } catch (errors) {
            throw errors;
        }
    } 

    async addTechnicalSEO(data) {
        try {
            return await this.insert(data);
        } catch (error) {
            throw error;
        }
    }

    async updateTechnicalSEO(id, data) {
        try {
            return await this.update(id, data);
        } catch (error) {
            throw error;
        }
    }
}

module.exports = { TechnicalSEOService };
