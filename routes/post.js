const express = require('express');
const router = express.Router();

const postsConrtoller = require('../controllers/post_controller');

router.get('/post', postsConrtoller.post);
module.exports = router;