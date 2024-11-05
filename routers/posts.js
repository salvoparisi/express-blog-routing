const express = require('express');
const router = express.Router();
const postController = require('../controllers/posts.js');

router.get('/', postController.index);

router.get('/:slug', postController.show);

module.exports = router;

