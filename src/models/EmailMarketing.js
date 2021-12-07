const { ObjectId } = require('bson');
const mongoose = require('mongoose');
const { Schema } = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator');

class EmailMarketing {

    initSchema() {
        const schema = new Schema({
            'emailMarketingh1': {
                'type': String,
                'required': true,
            },
            'emailMarketingtitle': {
                'type': String,
                'required': true,
            },
            'emailMarketingDescription': {
                'type': String,
                'required': true,
            },
            'emailMarketingBenefitBusi': {
                'type': String,
                'required': true,
            },
            'emailMarketingFaq1': {
                'type' : String,
                'required' : true,
            },
            'emailMarketingFaq1Ans': {
                'type' : String,
                'required' : true,
            },
            'emailMarketingFaq2': {
                'type' : String,
                'required' : true,
            },
            'emailMarketingFaq2Ans': {
                'type' : String,
                'required' : true,
            },
            'emailMarketingFaq3': {
                'type' : String,
                'required' : true,
            },
            'emailMarketingFaq3Ans': {
                'type' : String,
                'required' : true,
            },
            'emailMarketingFaq4': {
                'type' : String,
                'required' : true,
            },
            'emailMarketingFaq4Ans': {
                'type' : String,
                'required' : true,
            },
            'emailMarketingFaq5': {
                'type' : String,
                'required' : true,
            },
            'emailMarketingFaq5Ans': {
                'type' : String,
                'required' : true,
            },
            'emailMarketingFaq6': {
                'type' : String,
                'required' : true,
            },
            'emailMarketingFaq6Ans': {
                'type' : String,
                'required' : true,
            },
            'emailMarketingFaq7': {
                'type' : String,
                'required' : true,
            },
            'emailMarketingFaq7Ans': {
                'type' : String,
                'required' : true,
            },
            'emailMarketingFaq8': {
                'type' : String,
                'required' : true,
            },
            'emailMarketingFaq8Ans': {
                'type' : String,
                'required' : true,
            },
            'emailMarketingFaq9': {
                'type' : String,
                'required' : true,
            },
            'emailMarketingFaq9Ans': {
                'type' : String,
                'required' : true,
            },
            'emailMarketingFaq10': {
                'type' : String,
                'required' : true,
            },
            'emailMarketingFaq10Ans': {
                'type' : String,
                'required' : true,
            },
            'emailMarketingmetaTag1': {
                'type': String,
                'required': true,
            },
            'emailMarketingmetaTag2': {
                'type': String,
                'required': true,
            },
            'emailMarketingmetaTag3': {
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
            mongoose.model('emailMarketing', schema);
        } catch (e) {

        }
    }

    getInstance() {
        this.initSchema();
        return mongoose.model('emailMarketing');
    }
}

module.exports = { EmailMarketing };
