// 1.2 | Insert our first users in users collection
// ------------------------------------------------
// PASTE 3 USER INSERT QUERIES HERE

db.users.insertOne({
    "firstName": "John",
    "lastName": "Smith",
    "dateBirth": ISODate("2016-12-10T18:28:09.369Z"),
    "address": {
      "streetAddress": "21 2nd Street",
      "city": "New York",
      "state": "NY",
      "postalCode": "10021"
    }
  });

  db.users.insertOne({
      "firstName": "John",
      "lastName": "Smith",
      "dateBirth": ISODate("2016-12-10T18:28:09.369Z"),
      "address": {
        "streetAddress": "21 2nd Street",
        "city": "New York",
        "state": "NY",
        "postalCode": "10021"
      }
    });

  db.users.insertOne({
    "firstName": "John",
    "lastName": "Smith",
    "dateBirth": ISODate("2016-12-10T18:28:09.369Z"),
    "address": {
      "streetAddress": "21 2nd Street",
      "city": "New York",
      "state": "NY",
      "postalCode": "10021"
    }
  });

// 1.3 | Insert our first products in products collection
// ------------------------------------------------------
// PASTE 3 PRODUCT INSERT QUERIES HERE

db.products.insertOne({
     "name": "Water Bottle",
     "description":"High quality glass bottle provides a healthier way to drink.  Silicone sleeve provides a good grip, a see-through window, and protects the glass vessel.  Eliminates toxic leaching that plastic can cause.  Innovative design holds 22-1/2 ounces.  Dishwasher safe",
     "category":"Kitchen",
     "price":23.0
  });

db.products.insertOne(
  {
     "name": "Super-Duper Soaker",
     "description":"More powerful than a water hose!  Warning: Do not spray at small children.",
     "category":"Toys",
     "price":230.00
  });

db.products.insertOne(
  {
     "name": "Laser Gun",
     "description": "Disintegrate anything that it touches!",
     "category":"Weapon",
     "price":200.0
  });


// 1.4 | Getting Started with queries
// ----------------------------------
// PASTE SHOPPING CART QUERY HERE

db.users.updateOne( {"firstName": "John"}, {$push: {"Shopping-cart":{}}} );

// PASTE LIST PRODUCTS QUERY HERE

db.users.find({}, {"shopping-cart": 1});
db.products.find({});

// PASTE CATEGORY PRODUCTS QUERY HERE

db.products.find({"category": "Weapon"});


// PASTE DELETE PRODUCT QUERY HERE

db.products.deleteOne(
  {
    "_id" : ObjectId("59498a769131c01b15b3a5e7")
  });

// PASTE REVIEW QUERY HERE

db.products.updateOne( {"name": "Laser Gun"}, {$push: {"reviews": [ {
      "name": "Shannon",
      "comment": "This is so warm and comfortable.",
      "stars": 2,
      "date": "2016-11-10T18:28:09.369Z"
    }
  ] } };
