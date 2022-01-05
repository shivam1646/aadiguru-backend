const { ObjectId } = require('bson');
const mongoose = require('mongoose');
const { Schema } = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator');

class SEOAudit {

    initSchema() {
        const schema = new Schema({
            'seoAudith1': {
                'type': String,
                'required': true,
            },
            'seoAudittitle': {
                'type': String,
                'required': true,
            },
            'seoAuditDescription': {
                'type': String,
                'required': true,
            },
            'seoAuditBenefitBusi': {
                'type': String,
                'required': true,
            },
            'seoAuditFaq1': {
                'type' : String,
                'required' : true,
            },
            'seoAuditFaq1Ans': {
                'type' : String,
                'required' : true,
            },
            'seoAuditFaq2': {
                'type' : String,
                'required' : true,
            },
            'seoAuditFaq2Ans': {
                'type' : String,
                'required' : true,
            },
            'seoAuditFaq3': {
                'type' : String,
                'required' : true,
            },
            'seoAuditFaq3Ans': {
                'type' : String,
                'required' : true,
            },
            'seoAuditFaq4': {
                'type' : String,
                'required' : true,
            },
            'seoAuditFaq4Ans': {
                'type' : String,
                'required' : true,
            },
            'seoAuditFaq5': {
                'type' : String,
                'required' : true,
            },
            'seoAuditFaq5Ans': {
                'type' : String,
                'required' : true,
            },
            'seoAuditFaq6': {
                'type' : String,
                'required' : true,
            },
            'seoAuditFaq6Ans': {
                'type' : String,
                'required' : true,
            },
            'seoAuditFaq7': {
                'type' : String,
                'required' : true,
            },
            'seoAuditFaq7Ans': {
                'type' : String,
                'required' : true,
            },
            'seoAuditFaq8': {
                'type' : String,
                'required' : true,
            },
            'seoAuditFaq8Ans': {
                'type' : String,
                'required' : true,
            },
            'seoAuditFaq9': {
                'type' : String,
                'required' : true,
            },
            'seoAuditFaq9Ans': {
                'type' : String,
                'required' : true,
            },
            'seoAuditFaq10': {
                'type' : String,
                'required' : true,
            },
            'seoAuditFaq10Ans': {
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
            mongoose.model('seoAudit', schema);
        } catch (e) {

        }
    }

    getInstance() {
        this.initSchema();
        return mongoose.model('seoAudit');
    }
}

module.exports = { SEOAudit };
