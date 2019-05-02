const path = require('path');
const express = require('express');
const morgan = require('morgan');
const assert = require('assert');
const mongodbClient = require("mongodb").MongoClient;
const config = require('./config').configuration;
const app = express();

// importing routes
const indexRoutes = require('./routes/index');

// settings
app.set('port', config.port);
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// middlewares
app.use(morgan('dev'));
app.use(express.urlencoded({extended: false}))
// routes
app.use('/', indexRoutes);

mongodbClient.connect(config.URI, { useNewUrlParser: true }, (error, client) => {
    assert.equal(null,error);
    
    // database = client.db(config.dbName);
    
    console.log("Connected to ");
  });
app.listen(app.get('port'), () => {
  
  
});
