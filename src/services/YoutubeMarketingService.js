'use strict';
const { Service } = require('../../system/services/Service');
const autoBind = require('auto-bind');

class YoutubeMarketingService extends Service {
    constructor(model) {
        super(model);
        this.model = model;
        autoBind(this);
    }

    async youtubeMarketingList() {
        try {
            return await this.model.findlist();
        } catch (errors) {
            throw errors;
        }
    } 

    async addYoutubeMarketing(data) {
        try {
            return await this.insert(data);
        } catch (error) {
            throw error;
        }
    }

    async updateYoutubeMarketing(id, data) {
        try {
            return await this.update(id, data);
        } catch (error) {
            throw error;
        }
    }
}

module.exports = { YoutubeMarketingService };
