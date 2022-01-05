const { ObjectId } = require('bson');
const mongoose = require('mongoose');
const { Schema } = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator');

class LocalSEO {

    initSchema() {
        const schema = new Schema({
            'localSEOh1': {
                'type': String,
                'required': true,
            },
            'localSEOtitle': {
                'type': String,
                'required': true,
            },
            'localSEODescription': {
                'type': String,
                'required': true,
            },
            'localSEOBenefitBusi': {
                'type': String,
                'required': true,
            },
            'localSEOFaq1': {
                'type' : String,
                'required' : true,
            },
            'localSEOFaq1Ans': {
                'type' : String,
                'required' : true,
            },
            'localSEOFaq2': {
                'type' : String,
                'required' : true,
            },
            'localSEOFaq2Ans': {
                'type' : String,
                'required' : true,
            },
            'localSEOFaq3': {
                'type' : String,
                'required' : true,
            },
            'localSEOFaq3Ans': {
                'type' : String,
                'required' : true,
            },
            'localSEOFaq4': {
                'type' : String,
                'required' : true,
            },
            'localSEOFaq4Ans': {
                'type' : String,
                'required' : true,
            },
            'localSEOFaq5': {
                'type' : String,
                'required' : true,
            },
            'localSEOFaq5Ans': {
                'type' : String,
                'required' : true,
            },
            'localSEOFaq6': {
                'type' : String,
                'required' : true,
            },
            'localSEOFaq6Ans': {
                'type' : String,
                'required' : true,
            },
            'localSEOFaq7': {
                'type' : String,
                'required' : true,
            },
            'localSEOFaq7Ans': {
                'type' : String,
                'required' : true,
            },
            'localSEOFaq8': {
                'type' : String,
                'required' : true,
            },
            'localSEOFaq8Ans': {
                'type' : String,
                'required' : true,
            },
            'localSEOFaq9': {
                'type' : String,
                'required' : true,
            },
            'localSEOFaq9Ans': {
                'type' : String,
                'required' : true,
            },
            'localSEOFaq10': {
                'type' : String,
                'required' : true,
            },
            'localSEOFaq10Ans': {
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
            mongoose.model('localSEO', schema);
        } catch (e) {

        }
    }

    getInstance() {
        this.initSchema();
        return mongoose.model('localSEO');
    }
}

module.exports = { LocalSEO };
