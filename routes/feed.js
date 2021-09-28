const express = require('express');

const feedController = require('../controllers/feed');

const router = express.router();

// define the routes
router.get('/posts', feedController.getPosts);

module.exports = router;