const { ObjectId } = require('bson');
const mongoose = require('mongoose');
const { Schema } = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator');

class DisplayAds {

    initSchema() {
        const schema = new Schema({
            'displayAdsh1': {
                'type': String,
                'required': true,
            },
            'displayAdstitle': {
                'type': String,
                'required': true,
            },
            'displayAdsDescription': {
                'type': String,
                'required': true,
            },
            'displayAdsBenefitBusi': {
                'type': String,
                'required': true,
            },
            'displayAdsFaq1': {
                'type' : String,
                'required' : true,
            },
            'displayAdsFaq1Ans': {
                'type' : String,
                'required' : true,
            },
            'displayAdsFaq2': {
                'type' : String,
                'required' : true,
            },
            'displayAdsFaq2Ans': {
                'type' : String,
                'required' : true,
            },
            'displayAdsFaq3': {
                'type' : String,
                'required' : true,
            },
            'displayAdsFaq3Ans': {
                'type' : String,
                'required' : true,
            },
            'displayAdsFaq4': {
                'type' : String,
                'required' : true,
            },
            'displayAdsFaq4Ans': {
                'type' : String,
                'required' : true,
            },
            'displayAdsFaq5': {
                'type' : String,
                'required' : true,
            },
            'displayAdsFaq5Ans': {
                'type' : String,
                'required' : true,
            },
            'displayAdsFaq6': {
                'type' : String,
                'required' : true,
            },
            'displayAdsFaq6Ans': {
                'type' : String,
                'required' : true,
            },
            'displayAdsFaq7': {
                'type' : String,
                'required' : true,
            },
            'displayAdsFaq7Ans': {
                'type' : String,
                'required' : true,
            },
            'displayAdsFaq8': {
                'type' : String,
                'required' : true,
            },
            'displayAdsFaq8Ans': {
                'type' : String,
                'required' : true,
            },
            'displayAdsFaq9': {
                'type' : String,
                'required' : true,
            },
            'displayAdsFaq9Ans': {
                'type' : String,
                'required' : true,
            },
            'displayAdsFaq10': {
                'type' : String,
                'required' : true,
            },
            'displayAdsFaq10Ans': {
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
            mongoose.model('displayAds', schema);
        } catch (e) {

        }
    }

    getInstance() {
        this.initSchema();
        return mongoose.model('displayAds');
    }
}

module.exports = { DisplayAds };
