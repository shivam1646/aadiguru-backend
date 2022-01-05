const { ObjectId } = require('bson');
const mongoose = require('mongoose');
const { Schema } = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator');

class LocalAds {

    initSchema() {
        const schema = new Schema({
            'localAdsh1': {
                'type': String,
                'required': true,
            },
            'localAdstitle': {
                'type': String,
                'required': true,
            },
            'localAdsDescription': {
                'type': String,
                'required': true,
            },
            'localAdsBenefitBusi': {
                'type': String,
                'required': true,
            },
            'localAdsFaq1': {
                'type' : String,
                'required' : true,
            },
            'localAdsFaq1Ans': {
                'type' : String,
                'required' : true,
            },
            'localAdsFaq2': {
                'type' : String,
                'required' : true,
            },
            'localAdsFaq2Ans': {
                'type' : String,
                'required' : true,
            },
            'localAdsFaq3': {
                'type' : String,
                'required' : true,
            },
            'localAdsFaq3Ans': {
                'type' : String,
                'required' : true,
            },
            'localAdsFaq4': {
                'type' : String,
                'required' : true,
            },
            'localAdsFaq4Ans': {
                'type' : String,
                'required' : true,
            },
            'localAdsFaq5': {
                'type' : String,
                'required' : true,
            },
            'localAdsFaq5Ans': {
                'type' : String,
                'required' : true,
            },
            'localAdsFaq6': {
                'type' : String,
                'required' : true,
            },
            'localAdsFaq6Ans': {
                'type' : String,
                'required' : true,
            },
            'localAdsFaq7': {
                'type' : String,
                'required' : true,
            },
            'localAdsFaq7Ans': {
                'type' : String,
                'required' : true,
            },
            'localAdsFaq8': {
                'type' : String,
                'required' : true,
            },
            'localAdsFaq8Ans': {
                'type' : String,
                'required' : true,
            },
            'localAdsFaq9': {
                'type' : String,
                'required' : true,
            },
            'localAdsFaq9Ans': {
                'type' : String,
                'required' : true,
            },
            'localAdsFaq10': {
                'type' : String,
                'required' : true,
            },
            'localAdsFaq10Ans': {
                'type' : String,
                'required' : true,
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
            mongoose.model('localAds', schema);
        } catch (e) {

        }
    }

    getInstance() {
        this.initSchema();
        return mongoose.model('localAds');
    }
}

module.exports = { LocalAds };
