'use strict';
const { Service } = require('../../system/services/Service');
const autoBind = require('auto-bind');

class ContentMarketingService extends Service {
    constructor(model) {
        super(model);
        this.model = model;
        autoBind(this);
    }

    async contentMarketingList() {
        try {
            return await this.model.findlist();
        } catch (errors) {
            throw errors;
        }
    } 

    async addContentMarketing(data) {
        try {
            return await this.insert(data);
        } catch (error) {
            throw error;
        }
    }

    async updateContentMarketing(id, data) {
        try {
            return await this.update(id, data);
        } catch (error) {
            throw error;
        }
    }
}

module.exports = { ContentMarketingService };
