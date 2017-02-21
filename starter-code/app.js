const MongoClient = require('mongodb').MongoClient;

const dbServer = 'localhost';
const dbPort = "27017";
const dbName = "W4D2E1";
const connectionURL = `mongodb://${dbServer}:${dbPort}/${dbName}`;

MongoClient.connect(connectionURL, (err, db) => {
  if (err) {
    console.log("Broken!");
    console.log(err);
    return;
  }
    console.log("Connection Successful");
    // db.close();


  const newReview = {
    author: "SPR",
    rating: 5,
    restaurant: "Wendy's"
  };

  db.collection('reviews').insertOne(newReview, (err, newDoc) => {
    if (err) {
      console.log("shit broke");
      return;
    }
    console.log("Updated Review");
    console.log(newDoc);
  });
db.close();
});
