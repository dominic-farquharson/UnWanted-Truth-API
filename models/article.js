const mongoose = require('mongoose');
const ArticleSchema = require('../db/schemas/articleSchema');

/* Using Schema to create model */
const Article = mongoose.model('Article', ArticleSchema);

// exporting
module.exports = Article;
