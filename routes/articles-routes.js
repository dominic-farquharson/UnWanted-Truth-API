const express = require('express');
const router = express.Router();

const articlesController = require('../controllers/articles-controller');

router.get('/', articlesController.findAll);
router.get('/:articleId', articlesController.findOne);
router.post('/:articleId', articlesController.edit);


module.exports = router;

