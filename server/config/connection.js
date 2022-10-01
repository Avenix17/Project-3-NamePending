const mongoose = require('mongoose');

// After you create your Heroku application, visit https://dashboard.heroku.com/apps/ select the application name and add your Atlas connection string as a Config Var
// Node will look for this environment variable and if it exists, it will use it. Otherwise, it will assume that you are running this application locally

mongoose.connect(
    process.env.MONGODB_URI || 'mongodb://localhost:27017/UnderATack',
{
    useNewUrlParser: true,
    useUnifiedTopology: true,
},
);

module.exports = mongoose.connection;