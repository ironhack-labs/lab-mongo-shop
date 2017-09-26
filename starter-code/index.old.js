const MongoClient = require('mongodb').MongoClient;

const dbServer = 'localhost';
const dbPort   = '27017';
const dbName   = 'shop';
const connectionURL = `mongodb://${dbServer}:${dbPort}/${dbName}`;

// Use connect method to connect to the server
MongoClient.connect(connectionURL, function(error, db) {
  if(error) { console.log("Error connecting to server", error); return;}

  console.log("Connected successfully to server")

  // Make your queries here

  db.collection('products').find().toArray((error, products) => {
    assert.equal(error, null);
    console.log('All Products: ', products)
})

  db.close();
});
