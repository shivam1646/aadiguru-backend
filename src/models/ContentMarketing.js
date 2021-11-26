const { ObjectId } = require('bson');
const mongoose = require('mongoose');
const { Schema } = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator');

class ContentMarketing {

    initSchema() {
        const schema = new Schema({
            'contentMarketingh1': {
                'type': String,
                'required': true,
            },
            'contentMarketingDescription': {
                'type': String,
                'required': true,
            },
            'contentMarketingMascot': {
                'type': String,
                'required': true,
            },
            'contentMarketingBenefitBusi': {
                'type': String,
                'required': true,
            },
            'contentMarketingCaseStudiesImage': {
                'type': String,
                'required': true,
            },
            'contentMarketingCaseStudiesDescription': {
                'type': String,
                'required': true,
            },
            'contentMarketingFaq1': {
                'type' : String,
                'required' : true,
            },
            'contentMarketingFaq1Ans': {
                'type' : String,
                'required' : true,
            },
            'contentMarketingFaq2': {
                'type' : String,
                'required' : true,
            },
            'contentMarketingFaq2Ans': {
                'type' : String,
                'required' : true,
            },
            'contentMarketingFaq3': {
                'type' : String,
                'required' : true,
            },
            'contentMarketingFaq3Ans': {
                'type' : String,
                'required' : true,
            },
            'contentMarketingFaq4': {
                'type' : String,
                'required' : true,
            },
            'contentMarketingFaq4Ans': {
                'type' : String,
                'required' : true,
            },
            'contentMarketingFaq5': {
                'type' : String,
                'required' : true,
            },
            'contentMarketingFaq5Ans': {
                'type' : String,
                'required' : true,
            },
            'contentMarketingFaq6': {
                'type' : String,
                'required' : true,
            },
            'contentMarketingFaq6Ans': {
                'type' : String,
                'required' : true,
            },
            'contentMarketingFaq7': {
                'type' : String,
                'required' : true,
            },
            'contentMarketingFaq7Ans': {
                'type' : String,
                'required' : true,
            },
            'contentMarketingFaq8': {
                'type' : String,
                'required' : true,
            },
            'contentMarketingFaq8Ans': {
                'type' : String,
                'required' : true,
            },
            'contentMarketingFaq9': {
                'type' : String,
                'required' : true,
            },
            'contentMarketingFaq9Ans': {
                'type' : String,
                'required' : true,
            },
            'contentMarketingFaq10': {
                'type' : String,
                'required' : true,
            },
            'contentMarketingFaq10Ans': {
                'type' : String,
                'required' : true,
            },
            'contentMarketingmetaTag1': {
                'type': String,
                'required': true,
            },
            'contentMarketingmetaTag2': {
                'type': String,
                'required': true,
            },
            'contentMarketingmetaTag3': {
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
            mongoose.model('contentMarketing', schema);
        } catch (e) {

        }
    }

    getInstance() {
        this.initSchema();
        return mongoose.model('contentMarketing');
    }
}

module.exports = { ContentMarketing };