const MongoClient = require('mongodb').MongoClient;

const dbUrl = 'mongodb://localhost/restaurantsApp';

MongoClient.connect(dbUrl, (err, db) => {
  if (err) {
    console.log('Oh noes! Database connect error!');
    console.log(err);
    return;
  }

  console.log('Connection ONLINE!');

  // Use the db variable for CRUD
  createStuff(db);
  readStuff(db);
  updateStuff(db);
  deleteStuff(db);

  // h4x
  setTimeout(() => db.close(), 1000);
});


function createStuff (db) {
  // Create: insertOne

  // db.reviews.insertOne({
  //   author: 'Nizar',
  //   rating: 5,
  //   restaurant: 'Wendys',
  //   comment: 'Good bang for your buck.'
  // })

  const newReview = {
    author: 'Nizar',
    rating: 5,
    restaurant: 'Wendys',
    comment: 'Good bang for your buck.'
  };

  db.collection('reviews').insertOne(newReview, (err, newDoc) => {
    if (err) {
      console.log('Oh noes! insertOne error.');
      return;
    }

    console.log('insertOne SUCCESS!');
  });
}


function readStuff (db) {
  // Read: find

  // db.restaurants.find(
  //   { 'grades.grade': 'C' },
  //   { name: 1, _id: 0, borough: 1 }
  // )

  const filter = {
    'grades.grade': 'C'
  };

  const project = {
    name: 1,
    _id: 0,
    borough: 1
  };

  db.collection('restaurants')
    .find(filter, project)
    .toArray((err, results) => {
      if (err) {
        console.log('Oh noes! find error!');
        return;
      }

      // results.forEach((oneRestaurant) => {
      //   console.log(oneRestaurant);
      // });

      console.log(`find SUCCESS! Results: ${results.length}.`);
    });
}


function updateStuff (db) {
  // Update: updateOne

  // db.reviews.updateOne(
  //   { author: 'Nizar' },
  //   { $inc: { rating: 1 } }
  // )

  const filter = { author: 'Nizar' };
  const thingsToUpdate = { $inc: { rating: 1 } };

  db.collection('reviews').updateOne(filter, thingsToUpdate, (err) => {
    if (err) {
      console.log('Oh noes! updateOne error!');
      console.log(err);
      return;
    }

    console.log('updateOne SUCCESS!');
  });
}


function deleteStuff (db) {
  // Delete: deleteOne

  // db.reviews.deleteOne({ name: 'Nizar' })

  const filter = { name: 'Nizar' };

  db.collection('reviews').deleteOne(filter, (err) => {
    if (err) {
      console.log('Oh noes! deleteOne error!');
      console.log(err);
      return;
    }

    console.log('deleteOne SUCCESS!');
  });
}
