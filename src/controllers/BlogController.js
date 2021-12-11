const { BlogService } = require('./../services/BlogService');
const { Blog } = require('./../models/Blog');
const autoBind = require('auto-bind');
const blogService = new BlogService(
    new Blog().getInstance()
);

class BlogController {

    constructor(service) {
        this.service = service;
        autoBind(this);
    }

    async getBlogList(req, res, next) {
        try {
            const blogList = await this.service.blogList();
            await res.status(200).json({ items: blogList });
        } catch (e) {
            next(e);
        }
    }

    async addBlog(req, res, next) {
        try {
            const addedBlogData = await this.service.addBlog(req.body);
            await res.status(200).json(addedBlogData);
        } catch (e) {
            next(e);
        }
    }

    async updateBlog(req, res, next) {
        try {
            const updatedBlogData = await this.service.updateBlog(req.params.id, req.body);
            await res.status(200).json(updatedBlogData);
        } catch (e) {
            next(e);
        }
    }
}

module.exports = new BlogController(blogService);
