const { ObjectId } = require('bson');
const mongoose = require('mongoose');
const { Schema } = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator');

class TechnicalSEO {

    initSchema() {
        const schema = new Schema({
            'technicalSEOh1': {
                'type': String,
                'required': true,
            },
            'technicalSEOtitle': {
                'type': String,
                'required': true,
            },
            'technicalSEODescription': {
                'type': String,
                'required': true,
            },
            'technicalSEOBenefitBusi': {
                'type': String,
                'required': true,
            },
            'technicalSEOFaq1': {
                'type' : String,
                'required' : true,
            },
            'technicalSEOFaq1Ans': {
                'type' : String,
                'required' : true,
            },
            'technicalSEOFaq2': {
                'type' : String,
                'required' : true,
            },
            'technicalSEOFaq2Ans': {
                'type' : String,
                'required' : true,
            },
            'technicalSEOFaq3': {
                'type' : String,
                'required' : true,
            },
            'technicalSEOFaq3Ans': {
                'type' : String,
                'required' : true,
            },
            'technicalSEOFaq4': {
                'type' : String,
                'required' : true,
            },
            'technicalSEOFaq4Ans': {
                'type' : String,
                'required' : true,
            },
            'technicalSEOFaq5': {
                'type' : String,
                'required' : true,
            },
            'technicalSEOFaq5Ans': {
                'type' : String,
                'required' : true,
            },
            'technicalSEOFaq6': {
                'type' : String,
                'required' : true,
            },
            'technicalSEOFaq6Ans': {
                'type' : String,
                'required' : true,
            },
            'technicalSEOFaq7': {
                'type' : String,
                'required' : true,
            },
            'technicalSEOFaq7Ans': {
                'type' : String,
                'required' : true,
            },
            'technicalSEOFaq8': {
                'type' : String,
                'required' : true,
            },
            'technicalSEOFaq8Ans': {
                'type' : String,
                'required' : true,
            },
            'technicalSEOFaq9': {
                'type' : String,
                'required' : true,
            },
            'technicalSEOFaq9Ans': {
                'type' : String,
                'required' : true,
            },
            'technicalSEOFaq10': {
                'type' : String,
                'required' : true,
            },
            'technicalSEOFaq10Ans': {
                'type' : String,
                'required' : true,
            },
            'technicalSEOmetaTag1': {
                'type': String,
                'required': true,
            },
            'technicalSEOmetaTag2': {
                'type': String,
                'required': true,
            },
            'technicalSEOmetaTag3': {
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
            mongoose.model('technicalSEO', schema);
        } catch (e) {

        }
    }

    getInstance() {
        this.initSchema();
        return mongoose.model('technicalSEO');
    }
}

module.exports = { TechnicalSEO };
