'use strict';
const { Service } = require('../../system/services/Service');
const autoBind = require('auto-bind');

class LocalAdsService extends Service {
    constructor(model) {
        super(model);
        this.model = model;
        autoBind(this);
    }

    async localAdsList() {
        try {
            return await this.model.findlist();
        } catch (errors) {
            throw errors;
        }
    } 

    async addLocalAds(data) {
        try {
            return await this.insert(data);
        } catch (error) {
            throw error;
        }
    }

    async updateLocalAds(id, data) {
        try {
            return await this.update(id, data);
        } catch (error) {
            throw error;
        }
    }
}

module.exports = { LocalAdsService };
