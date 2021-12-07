const { ObjectId } = require('bson');
const mongoose = require('mongoose');
const { Schema } = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator');

class BoostDigitalPresence {

    initSchema() {
        const schema = new Schema({
            'boostDigitalPresenceh1': {
                'type': String,
                'required': true,
            },
            'boostDigitalPresencetitle': {
                'type': String,
                'required': true,
            },
            'boostDigitalPresenceDescription': {
                'type': String,
                'required': true,
            },
            'boostDigitalPresenceVideoUrl': {
                'type': String,
                'required': true,
            },
            'boostDigitalPresenceVideoDescription': {
                'type': String,
                'required': true,
            },
            'boostDigitalPresenceFaq1': {
                'type' : String,
                'required' : true,
            },
            'boostDigitalPresenceFaq1Ans': {
                'type' : String,
                'required' : true,
            },
            'boostDigitalPresenceFaq2': {
                'type' : String,
                'required' : true,
            },
            'boostDigitalPresenceFaq2Ans': {
                'type' : String,
                'required' : true,
            },
            'boostDigitalPresenceFaq3': {
                'type' : String,
                'required' : true,
            },
            'boostDigitalPresenceFaq3Ans': {
                'type' : String,
                'required' : true,
            },
            'boostDigitalPresenceFaq4': {
                'type' : String,
                'required' : true,
            },
            'boostDigitalPresenceFaq4Ans': {
                'type' : String,
                'required' : true,
            },
            'boostDigitalPresenceFaq5': {
                'type' : String,
                'required' : true,
            },
            'boostDigitalPresenceFaq5Ans': {
                'type' : String,
                'required' : true,
            },
            'boostDigitalPresenceFaq6': {
                'type' : String,
                'required' : true,
            },
            'boostDigitalPresenceFaq6Ans': {
                'type' : String,
                'required' : true,
            },
            'boostDigitalPresenceFaq7': {
                'type' : String,
                'required' : true,
            },
            'boostDigitalPresenceFaq7Ans': {
                'type' : String,
                'required' : true,
            },
            'boostDigitalPresenceFaq8': {
                'type' : String,
                'required' : true,
            },
            'boostDigitalPresenceFaq8Ans': {
                'type' : String,
                'required' : true,
            },
            'boostDigitalPresenceFaq9': {
                'type' : String,
                'required' : true,
            },
            'boostDigitalPresenceFaq9Ans': {
                'type' : String,
                'required' : true,
            },
            'boostDigitalPresenceFaq10': {
                'type' : String,
                'required' : true,
            },
            'boostDigitalPresenceFaq10Ans': {
                'type' : String,
                'required' : true,
            },
            'boostDigitalPresencemetaTag1': {
                'type': String,
                'required': true,
            },
            'boostDigitalPresencemetaTag2': {
                'type': String,
                'required': true,
            },
            'boostDigitalPresencemetaTag3': {
                'type': String,
                'required': true,
            },
            'deleted': {
                'type': Boolean,
                'default': false
            },
        }, { 'timestamps': true });


        schema.statics.findlist = function () {
            return this.find({ 'deleted': false });
        };

        schema.plugin(uniqueValidator);

        try {
            mongoose.model('boostDigitalPresence', schema);
        } catch (e) {

        }
    }

    getInstance() {
        this.initSchema();
        return mongoose.model('boostDigitalPresence');
    }
}

module.exports = { BoostDigitalPresence };
