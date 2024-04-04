const mongoose = require('mongoose');

//connection string for database (specify the database name 'inotebook')
const mongoURL = "mongodb://localhost:27017/iNotebook"


//syntax
// connectToMongo is a function which uses built-in function mongoose.connect(which takes a the URI(connnection string), and a callback function))

const connectToMongo = () => {
    mongoose.set('strictQuery', false);
    mongoose.connect(mongoURL, () => {
        console.log("conncted to mongo Successfully.");
    })
}

module.exports = connectToMongo;