// 1.2 | Insert our first users in users collection
// ------------------------------------------------
// PASTE 3 USER INSERT QUERIES HERE
db.users.insertOne(
  {
    "firstName": "John",
    "lastName": "Smith",
    "dateBirth": ISODate("2016-12-10T18:28:09.369Z"),
    "address": {
      "streetAddress": "21 2nd Street",
      "city": "New York",
      "state": "NY",
      "postalCode": "10021"
    }
  }
);

db.users.insertOne(
  {
    "firstName": "Ariel",
    "lastName": "Fonticiella",
    "dateBirth": ISODate("1986-02-10T18:28:09.369Z"),
    "address": {
      "streetAddress": "5010 Coquina Key Drive SE",
      "city": "St. Petersburg",
      "state": "FL",
      "postalCode": "33705"
    }
  }
);

db.users.insertOne(
  {
    "firstName": "Alex",
    "lastName": "Del Valle",
    "dateBirth": ISODate("1989-05-16T18:28:09.369Z"),
    "address": {
      "streetAddress": "3741 SW 132nd Ave",
      "city": "Miami",
      "state": "FL",
      "postalCode": "33175"
    }
  }
);


// 1.3 | Insert our first products in products collection
// ------------------------------------------------------
// PASTE 3 PRODUCT INSERT QUERIES HERE
db.products.insertOne(
  {
     "name": "Water Bottle",
     "description":"High quality glass bottle provides a healthier way to drink.  Silicone sleeve provides a good grip, a see-through window, and protects the glass vessel.  Eliminates toxic leaching that plastic can cause.  Innovative design holds 22-1/2 ounces.  Dishwasher safe",
     "category":"Kitchen",
     "price":23.0
  }
);

db.products.insertOne(
  {
     "name": "PC",
     "description":"High quality PC provides a quicker way to download games.",
     "category":"Electronics",
     "price":1000
  }
);

db.products.insertOne(
  {
     "name": "Call of Duty",
     "description":"An amazing game focused on World War II.",
     "category":"Gaming",
     "price":60
  }
);

// 1.4 | Getting Started with queries
// ----------------------------------
db.users.updateOne(
  { "firstName": "John"},
  { $set: { "shoppingCart": [ObjectId("5a02098e8859e4d3c5e2c39b")] } }
);

db.users.updateOne(
  { "firstName": "Ariel"},
  { $set: { "shoppingCart": [ObjectId("5a0209978859e4d3c5e2c39c")] } }
);

db.users.updateOne(
  { "firstName": "Alex"},
  { $set: { "shoppingCart": [ObjectId("5a0209a48859e4d3c5e2c39d")] } }
);



// PASTE LIST PRODUCTS QUERY HERE
db.products.find().pretty();


// PASTE CATEGORY PRODUCTS QUERY HERE
db.products.find(
  { "category": { $eq: "Electronics"} },
  { "name": 1, "category": 1 }
).pretty();

// PASTE DELETE PRODUCT QUERY HERE
db.products.deleteOne(
  { "name": "Water Bottle"}
);

// PASTE REVIEW QUERY HERE
db.products.updateOne(
  { "name": "PC" },
  { $set: { "reviews": [{
        "name": "Guadalupe",
        "comment": "It's so fast! Would definitely recommend.",
        "stars": 5,
        "date": "2016-11-10T18:28:09.369Z"
      }]
  }
});
