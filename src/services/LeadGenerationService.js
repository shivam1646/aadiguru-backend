'use strict';
const { Service } = require('../../system/services/Service');
const autoBind = require('auto-bind');

class LeadGenerationService extends Service {
    constructor(model) {
        super(model);
        this.model = model;
        autoBind(this);
    }

    async leadGenerationList() {
        try {
            var data = await this.model.findlist();
            return data ;
           
        } catch (errors) {
            throw errors;
        }
    } 

    async addLeadGeneration(data) {
        try {
            return await this.insert(data);
        } catch (error) {
            throw error;
        }
    }

    async updateLeadGeneration(id, data) {
        try {
            return await this.update(id, data);
        } catch (error) {
            throw error;
        }
    }
}

module.exports = { LeadGenerationService };
