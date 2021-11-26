'use strict';
const { Service } = require('../../system/services/Service');
const autoBind = require('auto-bind');

class LocalSEOService extends Service {
    constructor(model) {
        super(model);
        this.model = model;
        autoBind(this);
    }

    async localSEOList() {
        try {
            return await this.model.findlist();
        } catch (errors) {
            throw errors;
        }
    } 

    async addLocalSEO(data) {
        try {
            return await this.insert(data);
        } catch (error) {
            throw error;
        }
    }

    async updateLocalSEO(id, data) {
        try {
            return await this.update(id, data);
        } catch (error) {
            throw error;
        }
    }
}

module.exports = { LocalSEOService };
