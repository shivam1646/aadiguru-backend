const { ObjectId } = require('bson');
const mongoose = require('mongoose');
const { Schema } = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator');

class YoutubeMarketing {

    initSchema() {
        const schema = new Schema({
            'youtubeMarketingh1': {
                'type': String,
                'required': true,
            },
            'youtubeMarketingtitle': {
                'type': String,
                'required': true,
            },
            'youtubeMarketingDescription': {
                'type': String,
                'required': true,
            },
            'youtubeMarketingBenefitBusi': {
                'type': String,
                'required': true,
            },
            'youtubeMarketingFaq1': {
                'type' : String,
                'required' : true,
            },
            'youtubeMarketingFaq1Ans': {
                'type' : String,
                'required' : true,
            },
            'youtubeMarketingFaq2': {
                'type' : String,
                'required' : true,
            },
            'youtubeMarketingFaq2Ans': {
                'type' : String,
                'required' : true,
            },
            'youtubeMarketingFaq3': {
                'type' : String,
                'required' : true,
            },
            'youtubeMarketingFaq3Ans': {
                'type' : String,
                'required' : true,
            },
            'youtubeMarketingFaq4': {
                'type' : String,
                'required' : true,
            },
            'youtubeMarketingFaq4Ans': {
                'type' : String,
                'required' : true,
            },
            'youtubeMarketingFaq5': {
                'type' : String,
                'required' : true,
            },
            'youtubeMarketingFaq5Ans': {
                'type' : String,
                'required' : true,
            },
            'youtubeMarketingFaq6': {
                'type' : String,
                'required' : true,
            },
            'youtubeMarketingFaq6Ans': {
                'type' : String,
                'required' : true,
            },
            'youtubeMarketingFaq7': {
                'type' : String,
                'required' : true,
            },
            'youtubeMarketingFaq7Ans': {
                'type' : String,
                'required' : true,
            },
            'youtubeMarketingFaq8': {
                'type' : String,
                'required' : true,
            },
            'youtubeMarketingFaq8Ans': {
                'type' : String,
                'required' : true,
            },
            'youtubeMarketingFaq9': {
                'type' : String,
                'required' : true,
            },
            'youtubeMarketingFaq9Ans': {
                'type' : String,
                'required' : true,
            },
            'youtubeMarketingFaq10': {
                'type' : String,
                'required' : true,
            },
            'youtubeMarketingFaq10Ans': {
                'type' : String,
                'required' : true,
            },
            'youtubeMarketingmetaTag1': {
                'type': String,
                'required': true,
            },
            'youtubeMarketingmetaTag2': {
                'type': String,
                'required': true,
            },
            'youtubeMarketingmetaTag3': {
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
            mongoose.model('youtubeMarketing', schema);
        } catch (e) {

        }
    }

    getInstance() {
        this.initSchema();
        return mongoose.model('youtubeMarketing');
    }
}

module.exports = { YoutubeMarketing };
