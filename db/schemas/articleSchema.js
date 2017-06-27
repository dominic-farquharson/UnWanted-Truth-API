/* importing mongoose */
const mongoose = require('mongoose');

// add moment 


/* Creating new Schema */
const ArticleSchema = new mongoose.Schema({
    author: {type: String, required: true},        
    title: {type: String, required: true, unique: true},
    tag: String,
    content: {
       
        body: String,
        image_url: String,
        date: String
    },
    meta: {
        category:String
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

module.exports = ArticleSchema;