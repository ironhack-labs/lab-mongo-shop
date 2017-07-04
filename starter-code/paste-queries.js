// 1.2 | Insert our first users in users collection
db.users.find();
// ------------------------------------------------
// PASTE 3 USER INSERT QUERIES HERE
var x = {   "firstName": "John",   "lastName": "Smith",   "dateBirth": ISODate("2016-12-10T18:28:09.369Z"),   "address": {     "streetAddress": "21 2nd Street",     "city": "New York",     "state": "NY",     "postalCode": "10021"   } }
db.users.insertOne(x);

// 1.3 | Insert our first products in products collection
// ------------------------------------------------------
// PASTE 3 PRODUCT INSERT QUERIES HERE
db.products.insertOne({    "name": "Water Bottle 2",    "description":"Test 1",    "category":"Kitchen",    "price":32.0 })
  // a couple of these

// 1.4 | Getting Started with queries
// ----------------------------------
// PASTE SHOPPING CART QUERY HERE
db.users.updateOne( { "firstName": "John"}, { $set: { "shoppingCart": [ObjectId("595b90ef89b8e5383cb67157"), ObjectId("595b90d989b8e5383cb67156")] } } );

// PASTE LIST PRODUCTS QUERY HERE
db.products.find();

// PASTE CATEGORY PRODUCTS QUERY HERE
db.products.find({"category": "Kitchen"});

// PASTE DELETE PRODUCT QUERY HERE
db.products.deleteOne({"name": "Water Bottle 1"});

// PASTE REVIEW QUERY HERE
var x = [     {       "name": "Shannon",       "comment": "This is so warm and comfortable.",       "stars": 2,       "date": "2016-11-10T18:28:09.369Z"     }   ]
db.products.updateOne( {"name": "Water Bottle"}, { $set: { "reviews": x  } });
