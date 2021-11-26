'use strict';
const Blog = require('../controllers/BlogController');
const express = require('express'),
    router = express.Router();

router.get('/blogList', Blog.getBlogList);
router.post('/addBlog', Blog.addBlog);
router.post('/updateBlog/:id', Blog.updateBlog);

module.exports = router;