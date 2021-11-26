'use strict';
const { Service } = require('../../system/services/Service');
const autoBind = require('auto-bind');

class BlogService extends Service {
    constructor(model) {
        super(model);
        this.model = model;
        autoBind(this);
    }

    async blogList() {
        try {
            return await this.model.findlist();
        } catch (errors) {
            throw errors;
        }
    } 

    async addBlog(data) {
        try {
            return await this.insert(data);
        } catch (error) {
            throw error;
        }
    }

    async updateBlog(id, data) {
        try {
            return await this.update(id, data);
        } catch (error) {
            throw error;
        }
    }
}

module.exports = { BlogService };
