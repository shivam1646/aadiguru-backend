'use strict';
const { Service } = require('../../system/services/Service');
const autoBind = require('auto-bind');

class DisplayAdsService extends Service {
    constructor(model) {
        super(model);
        this.model = model;
        autoBind(this);
    }

    async displayAdsList() {
        try {
            return await this.model.findlist();
        } catch (errors) {
            throw errors;
        }
    } 

    async addDisplayAds(data) {
        try {
            return await this.insert(data);
        } catch (error) {
            throw error;
        }
    }

    async updateDisplayAds(id, data) {
        try {
            return await this.update(id, data);
        } catch (error) {
            throw error;
        }
    }
}

module.exports = { DisplayAdsService };
