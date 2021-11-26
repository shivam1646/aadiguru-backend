const { BoostDigitalPresenceService } = require('./../services/BoostDigitalPresenceService');
const { BoostDigitalPresence } = require('./../models/BoostDigitalPresence');
const autoBind = require('auto-bind');
const boostDigitalPresenceService = new BoostDigitalPresenceService(
    new BoostDigitalPresence().getInstance()
);

class BoostDigitalPresenceController {

    constructor(service) {
        this.service = service;
        autoBind(this);
    }

    async getBoostDigitalPresenceList(req, res, next) {
        try {
            const boostDigitalPresenceList = await this.service.boostDigitalPresenceList();
            await res.status(200).json(boostDigitalPresenceList);
        } catch (e) {
            next(e);
        }
    }

    async addBoostDigitalPresence(req, res, next) {
        try {
            const addedBoostDigitalPresenceData = await this.service.addBoostDigitalPresence(req.body);
            await res.status(200).json(addedBoostDigitalPresenceData);
        } catch (e) {
            next(e);
        }
    }

    async updateBoostDigitalPresence(req, res, next) {
        try {
            const updatedBoostDigitalPresenceData = await this.service.updateBoostDigitalPresence(req.params.id, req.body);
            await res.status(200).json(updatedBoostDigitalPresenceData);
        } catch (e) {
            next(e);
        }
    }
}

module.exports = new BoostDigitalPresenceController(boostDigitalPresenceService);