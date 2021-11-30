const { ObjectId } = require('bson');
const mongoose = require('mongoose');
const { Schema } = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator');

class LeadGeneration {

    initSchema() {
        const schema = new Schema({
            'leadGenerationh1': {
                'type': String,
                'required': true,
            },
            'leadGenerationtitle': {
                'type': String,
                'required': true,
            },
            'leadGenerationDescription': {
                'type': String,
                'required': true,
            },
            'leadGenerationVideoUrl': {
                'type': String,
                'required': true,
            },
            'leadGenerationVideoDescription': {
                'type': String,
                'required': true,
            },
            // 'leadGenerationCaseStudiesImage': {
            //     'type': String,
            //     'required': true,
            // },
            // 'leadGenerationCaseStudiesDescription': {
            //     'type': String,
            //     'required': true,
            // },
            'leadGenerationFaq1': {
                'type' : String,
                'required' : true,
            },
            'leadGenerationFaq1Ans': {
                'type' : String,
                'required' : true,
            },
            'leadGenerationFaq2': {
                'type' : String,
                'required' : true,
            },
            'leadGenerationFaq2Ans': {
                'type' : String,
                'required' : true,
            },
            'leadGenerationFaq3': {
                'type' : String,
                'required' : true,
            },
            'leadGenerationFaq3Ans': {
                'type' : String,
                'required' : true,
            },
            'leadGenerationFaq4': {
                'type' : String,
                'required' : true,
            },
            'leadGenerationFaq4Ans': {
                'type' : String,
                'required' : true,
            },
            'leadGenerationFaq5': {
                'type' : String,
                'required' : true,
            },
            'leadGenerationFaq5Ans': {
                'type' : String,
                'required' : true,
            },
            'leadGenerationFaq6': {
                'type' : String,
                'required' : true,
            },
            'leadGenerationFaq6Ans': {
                'type' : String,
                'required' : true,
            },
            'leadGenerationFaq7': {
                'type' : String,
                'required' : true,
            },
            'leadGenerationFaq7Ans': {
                'type' : String,
                'required' : true,
            },
            'leadGenerationFaq8': {
                'type' : String,
                'required' : true,
            },
            'leadGenerationFaq8Ans': {
                'type' : String,
                'required' : true,
            },
            'leadGenerationFaq9': {
                'type' : String,
                'required' : true,
            },
            'leadGenerationFaq9Ans': {
                'type' : String,
                'required' : true,
            },
            'leadGenerationFaq10': {
                'type' : String,
                'required' : true,
            },
            'leadGenerationFaq10Ans': {
                'type' : String,
                'required' : true,
            },
            'leadGenerationmetaTag1': {
                'type': String,
                'required': true,
            },
            'leadGenerationmetaTag2': {
                'type': String,
                'required': true,
            },
            'leadGenerationmetaTag3': {
                'type': String,
                'required': true,
            },
            'deleted': {
                'type': Boolean,
                'default': false
            },
        }, { 'timestamps': true });


        schema.statics.findlist = function () {
            return this.find({'deleted': false});
        };

        schema.plugin(uniqueValidator);

        try {
            mongoose.model('leadGeneration', schema);
        } catch (e) {

        }
    }

    getInstance() {
        this.initSchema();
        return mongoose.model('leadGeneration');
    }
}

module.exports = { LeadGeneration };
