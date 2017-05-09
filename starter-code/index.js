const MongoClient = require('mongodb').MongoClient;

const dbServer = 'localhost';
const dbPort   = '27017';
const dbName   = 'myShop';
const connectionURL = `mongodb://${dbServer}:${dbPort}/${dbName}`;

// Use connect method to connect to the server
MongoClient.connect(connectionURL, function(error, db) {
  if(error) { console.log("Error connecting to server", error); return;}

  console.log("Connected successfully to server")

  // Make your queries here

  db.close();
});
