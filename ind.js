

const MongoClient = require('mongodb').MongoClient;
const assert = require('assert');
 
// Connection URL
const url = 'mongodb://admin:admin1234@ds149596.mlab.com:49596/nearyourcomfort?AuthMechanism=SCRAM-SHA-1';
 
// Database Name
const dbName = 'nearyourcomfort';
 
// Use connect method to connect to the server
MongoClient.connect(url, function(err, client) {
  assert.equal(null, err);
  console.log("Connected successfully to server");
 
  const db = client.db(dbName);
 
  client.close();
});