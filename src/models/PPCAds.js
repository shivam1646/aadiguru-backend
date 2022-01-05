const { ObjectId } = require('bson');
const mongoose = require('mongoose');
const { Schema } = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator');

class PPCAds {

    initSchema() {
        const schema = new Schema({
            'ppcAdsh1': {
                'type': String,
                'required': true,
            },
            'ppcAdstitle': {
                'type': String,
                'required': true,
            },
            'ppcAdsDescription': {
                'type': String,
                'required': true,
            },
            'ppcAdsBenefitBusi': {
                'type': String,
                'required': true,
            },
            'ppcAdsFaq1': {
                'type' : String,
                'required' : true,
            },
            'ppcAdsFaq1Ans': {
                'type' : String,
                'required' : true,
            },
            'ppcAdsFaq2': {
                'type' : String,
                'required' : true,
            },
            'ppcAdsFaq2Ans': {
                'type' : String,
                'required' : true,
            },
            'ppcAdsFaq3': {
                'type' : String,
                'required' : true,
            },
            'ppcAdsFaq3Ans': {
                'type' : String,
                'required' : true,
            },
            'ppcAdsFaq4': {
                'type' : String,
                'required' : true,
            },
            'ppcAdsFaq4Ans': {
                'type' : String,
                'required' : true,
            },
            'ppcAdsFaq5': {
                'type' : String,
                'required' : true,
            },
            'ppcAdsFaq5Ans': {
                'type' : String,
                'required' : true,
            },
            'ppcAdsFaq6': {
                'type' : String,
                'required' : true,
            },
            'ppcAdsFaq6Ans': {
                'type' : String,
                'required' : true,
            },
            'ppcAdsFaq7': {
                'type' : String,
                'required' : true,
            },
            'ppcAdsFaq7Ans': {
                'type' : String,
                'required' : true,
            },
            'ppcAdsFaq8': {
                'type' : String,
                'required' : true,
            },
            'ppcAdsFaq8Ans': {
                'type' : String,
                'required' : true,
            },
            'ppcAdsFaq9': {
                'type' : String,
                'required' : true,
            },
            'ppcAdsFaq9Ans': {
                'type' : String,
                'required' : true,
            },
            'ppcAdsFaq10': {
                'type' : String,
                'required' : true,
            },
            'ppcAdsFaq10Ans': {
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
            mongoose.model('ppcAds', schema);
        } catch (e) {

        }
    }

    getInstance() {
        this.initSchema();
        return mongoose.model('ppcAds');
    }
}

module.exports = { PPCAds };
