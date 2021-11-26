'use strict';
const { Service } = require('../../system/services/Service');
const autoBind = require('auto-bind');

class PPCAdsService extends Service {
    constructor(model) {
        super(model);
        this.model = model;
        autoBind(this);
    }

    async ppcAdsList() {
        try {
            return await this.model.findlist();
        } catch (errors) {
            throw errors;
        }
    } 

    async addPPCAds(data) {
        try {
            return await this.insert(data);
        } catch (error) {
            throw error;
        }
    }

    async updatePPCAds(id, data) {
        try {
            return await this.update(id, data);
        } catch (error) {
            throw error;
        }
    }
}

module.exports = { PPCAdsService };
