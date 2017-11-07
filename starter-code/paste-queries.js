// 1.2 | Insert our first users in users collection
// ------------------------------------------------
// PASTE 3 USER INSERT QUERIES HERE
db.users.insertOne({   "firstName": "John",   "lastName": "Avello",   "dateBirth": ISODate("2016-12-10T18:28:09.369Z"),   "address": {     "streetAddress": "21 2nd Street",     "city": "New York",     "state": "NY",     "postalCode": "10021"   } })
db.users.insertOne({   "firstName": "Papu",   "lastName": "Smith",   "dateBirth": ISODate("2016-12-10T18:28:09.369Z"),   "address": {     "streetAddress": "21 2nd Street",     "city": "New York",     "state": "NY",     "postalCode": "10021"   } })
db.users.insertOne({   "firstName": "Mario",   "lastName": "Del Rio",   "dateBirth": ISODate("2016-12-10T18:28:09.369Z"),   "address": {     "streetAddress": "21 2nd Street",     "city": "New York",     "state": "NY",     "postalCode": "10021"   } })

// 1.3 | Insert our first products in products collection
// ------------------------------------------------------
// PASTE 3 PRODUCT INSERT QUERIES HERE
db.products.insertOne({    "name": "Water Bottle",    "description":"High quality glass bottle provides a healthier way to drink.  Silicone sleeve provides a good grip, a see-through window, and protects the glass vessel.  Eliminates toxic leaching that plastic can cause.  Innovative design holds 22-1/2 ounces.  Dishwasher safe",    "category":"Kitchen",    "price":23.0 })
db.products.insertOne({    "name": "Yaizamon",    "description":"High quality glass bottle provides a healthier way to drink.  Silicone sleeve provides a good grip, a see-through window, and protects the glass vessel.  Eliminates toxic leaching that plastic can cause.  Innovative design holds 22-1/2 ounces.  Dishwasher safe",    "category":"Kitchen",    "price":23.0 })
db.products.insertOne({    "name": "Victorianas",    "description":"High quality glass bottle provides a healthier way to drink.  Silicone sleeve provides a good grip, a see-through window, and protects the glass vessel.  Eliminates toxic leaching that plastic can cause.  Innovative design holds 22-1/2 ounces.  Dishwasher safe",    "category":"Kitchen",    "price":23.0 })


// 1.4 | Getting Started with queries
// ----------------------------------
// PASTE SHOPPING CART QUERY HERE
db.users.find({},{ "category" : 1 });

// PASTE LIST PRODUCTS QUERY HERE
db.products.find({});

// PASTE CATEGORY PRODUCTS QUERY HERE
db.products.find({},{ "category" : 1 });

// PASTE DELETE PRODUCT QUERY HERE
db.products.deleteOne({"name":"Yaizamon"});

// PASTE REVIEW QUERY HERE
db.products.find({}, {"reviews" : 1});
