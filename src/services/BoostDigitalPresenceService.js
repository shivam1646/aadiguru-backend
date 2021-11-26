'use strict';
const { Service } = require('../../system/services/Service');
const autoBind = require('auto-bind');

class BoostDigitalPresenceService extends Service {
    constructor(model) {
        super(model);
        this.model = model;
        autoBind(this);
    }

    async boostDigitalPresenceList() {
        try {
            return await this.model.findlist();
        } catch (errors) {
            throw errors;
        }
    } 

    async addBoostDigitalPresence(data) {
        try {
            return await this.insert(data);
        } catch (error) {
            throw error;
        }
    }

    async updateBoostDigitalPresence(id, data) {
        try {
            return await this.update(id, data);
        } catch (error) {
            throw error;
        }
    }
}

module.exports = { BoostDigitalPresenceService };
