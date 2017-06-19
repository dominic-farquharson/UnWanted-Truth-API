/* importing mongoose */
const mongoose = require('mongoose');

/* Creating new Schema */
const ArticleSchema = new mongoose.Schema({
    author: {type: String, required: true},
    content: {
        title: String,
        body: String,
        image_url: String,
        date: String
    },
    created_at: Date,
    updated_At: Date
})

// action occuring before object is saved.
ArticleSchema.pre('save', function(next){
    let date = new Date();
    // updating date
    this.updated_at = date;

    if(!this.updated_At) this.created_at = date;

    return next();
})

/* Using Schema to create model */
const Article = mongoose.model('Article', ArticleSchema);

// exporting
module.exports = Article;
