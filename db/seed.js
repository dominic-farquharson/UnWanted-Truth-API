// importing mongoose config
const mongoose = require('./config');

// article model
const ArticleModel = require('./models/article');
// importing data
const seedData = require('./seedData');

/* Dropping Table */
ArticleModel.remove({})
    .catch(err => res.json({message: 'Error dropping table', err}))

/* Saving new data */
seedData.data.forEach(function(element, index) {
    let article = new ArticleModel(element);
    article.save()
        .then(article => {
            console.log(`article ${article._id} has been saved`); 
            mongoose.disconnect()
        })
        .catch(err => console.error('error', err))
})
