// importing mongoose
const mongoose = require('mongoose');
// datatabse url
const url = process.env.MONGODB_URI;

// connecting to db 
mongoose.connect(url);
// emitter for successful connection
mongoose.connection.on('connected', _ => {
    console.log(`Mongoose Server running on url ${url}`)
});
// error handler
mongoose.connection.on('error', error => console.error(`Mongoose connection error: ${error}`) );

// exporting monogoose
module.exports = mongoose;