const { ObjectId } = require('bson');
const mongoose = require('mongoose');
const { Schema } = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator');

class SocialMediaMarketing {

    initSchema() {
        const schema = new Schema({
            'socialMediaMarketingh1': {
                'type': String,
                'required': true,
            },
            'socialMediaMarketingtitle': {
                'type': String,
                'required': true,
            },
            'socialMediaMarketingDescription': {
                'type': String,
                'required': true,
            },
            'socialMediaMarketingBenefitBusi': {
                'type': String,
                'required': true,
            },
            'socialMediaMarketingFaq1': {
                'type' : String,
                'required' : true,
            },
            'socialMediaMarketingFaq1Ans': {
                'type' : String,
                'required' : true,
            },
            'socialMediaMarketingFaq2': {
                'type' : String,
                'required' : true,
            },
            'socialMediaMarketingFaq2Ans': {
                'type' : String,
                'required' : true,
            },
            'socialMediaMarketingFaq3': {
                'type' : String,
                'required' : true,
            },
            'socialMediaMarketingFaq3Ans': {
                'type' : String,
                'required' : true,
            },
            'socialMediaMarketingFaq4': {
                'type' : String,
                'required' : true,
            },
            'socialMediaMarketingFaq4Ans': {
                'type' : String,
                'required' : true,
            },
            'socialMediaMarketingFaq5': {
                'type' : String,
                'required' : true,
            },
            'socialMediaMarketingFaq5Ans': {
                'type' : String,
                'required' : true,
            },
            'socialMediaMarketingFaq6': {
                'type' : String,
                'required' : true,
            },
            'socialMediaMarketingFaq6Ans': {
                'type' : String,
                'required' : true,
            },
            'socialMediaMarketingFaq7': {
                'type' : String,
                'required' : true,
            },
            'socialMediaMarketingFaq7Ans': {
                'type' : String,
                'required' : true,
            },
            'socialMediaMarketingFaq8': {
                'type' : String,
                'required' : true,
            },
            'socialMediaMarketingFaq8Ans': {
                'type' : String,
                'required' : true,
            },
            'socialMediaMarketingFaq9': {
                'type' : String,
                'required' : true,
            },
            'socialMediaMarketingFaq9Ans': {
                'type' : String,
                'required' : true,
            },
            'socialMediaMarketingFaq10': {
                'type' : String,
                'required' : true,
            },
            'socialMediaMarketingFaq10Ans': {
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
            mongoose.model('socialMediaMarketing', schema);
        } catch (e) {

        }
    }

    getInstance() {
        this.initSchema();
        return mongoose.model('socialMediaMarketing');
    }
}

module.exports = { SocialMediaMarketing };
