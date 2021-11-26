const { ObjectId } = require('bson');
const mongoose = require('mongoose');
const { Schema } = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator');

class CaseStudies {

    initSchema() {
        const schema = new Schema({
            'caseStudiesh1': {
                'type': String,
                'required': true,
            },
        
            'caseStudiesImage': {
                'type': String,
                'required': true,
            },
            'caseStudiesdescription': {
                'type': String,
                'required': true,
            },
            'caseStudiesmetaTag1': {
                'type': String,
                'required': true,
            },
            'caseStudiesmetaTag2': {
                'type': String,
                'required': true,
            },
            'caseStudiesmetaTag3': {
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
            mongoose.model('caseStudies', schema);
        } catch (e) {

        }
    }

    getInstance() {
        this.initSchema();
        return mongoose.model('caseStudies');
    }
}

module.exports = { CaseStudies };