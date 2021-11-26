'use strict';
const { Service } = require('../../system/services/Service');
const autoBind = require('auto-bind');

class SocialMediaMarketingService extends Service {
    constructor(model) {
        super(model);
        this.model = model;
        autoBind(this);
    }

    async socialMediaMarketingList() {
        try {
            return await this.model.findlist();
        } catch (errors) {
            throw errors;
        }
    } 

    async addSocialMediaMarketing(data) {
        try {
            return await this.insert(data);
        } catch (error) {
            throw error;
        }
    }

    async updateSocialMediaMarketing(id, data) {
        try {
            return await this.update(id, data);
        } catch (error) {
            throw error;
        }
    }
}

module.exports = { SocialMediaMarketingService };
