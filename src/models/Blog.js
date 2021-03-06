const { ObjectId } = require('bson');
const mongoose = require('mongoose');
const { Schema } = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator');

class Blog {

    initSchema() {
        const schema = new Schema({
            'blogh1': {
                'type': String,
                'required': true,
            },     
            'blogImage': {
                'type': String,
                'required': true,
            },
            'blogdescription': {
                'type': String,
                'required': true,
            },
            'blogmetaTag1': {
                'type': String,
                'required': true,
            },
            'blogmetaTag2': {
                'type': String,
                'required': true,
            },
            'blogmetaTag3': {
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
            mongoose.model('blog', schema);
        } catch (e) {

        }
    }

    getInstance() {
        this.initSchema();
        return mongoose.model('blog');
    }
}

module.exports = { Blog };
