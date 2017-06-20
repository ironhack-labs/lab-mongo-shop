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
  });

  db.users.insertOne(
  {
   "firstName": "Darren",
   "lastName": "Whyte",
   "dateBirth": ISODate("2016-12-10T18:28:09.369Z"),
    "address": {
      "streetAddress": "123 Sample Street",
      "city": "New York",
      "state": "NY",
      "postalCode": "10001"
    }
  });

db.users.insertOne(
  {
    "firstName": "Lawrence",
    "lastName": "Fitzgerald",
    "dateBirth": ISODate("1980-12-19T18:28:09.369Z"),
    "address": {
      "streetAddress": "123 Example Way",
      "city": "Washington",
      "state": "DC",
      "postalCode": "20012"
    }
  });


// 1.3 | Insert our first products in products collection
// ------------------------------------------------------
// PASTE 3 PRODUCT INSERT QUERIES HERE


db.products.insertOne(
  {
     "name": "Water Bottle",
     "description":"High quality glass bottle provides a healthier way to drink.  Silicone sleeve provides a good grip, a see-through window, and protects the glass vessel.  Eliminates toxic leaching that plastic can cause.  Innovative design holds 22-1/2 ounces.  Dishwasher safe",
     "category":"Kitchen",
     "price":23.0
  });

db.products.insertOne(
  {
     "name": "Laser Gun",
     "description": "Disintegrate anything that it touches!",
     "category":"Weapon",
     "price":200.0
  });

db.products.insertOne(
  {
     "name": "Super-Duper Soaker",
     "description":"More powerful than a water hose!  Warning: Do not spray at small children.",
     "category":"Toys",
     "price":230.00
  });


// 1.4 | Getting Started with queries
// ----------------------------------
// PASTE SHOPPING CART QUERY HERE


// PASTE LIST PRODUCTS QUERY HERE


// PASTE CATEGORY PRODUCTS QUERY HERE


// PASTE DELETE PRODUCT QUERY HERE


// PASTE REVIEW QUERY HERE
