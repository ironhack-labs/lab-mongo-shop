// 1.2 | Insert our first users in users collection
// ------------------------------------------------
// PASTE 3 USER INSERT QUERIES HERE
db.users.insertOne({
  "firstName": "Adrian",
  "lastName": "Llerena",
  "dateBirth": ISODate("2009-01-11T18:28:09.369Z"),
  "address": {
    "streetAddress": "25 5nd Street",
    "city": "Miami",
    "state": "Fl",
    "postalCode": "33032"
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
  "firstName": "David",
  "lastName": "Alarcon",
  "dateBirth": ISODate("2006-06-09T18:28:09.369Z"),
  "address": {
    "streetAddress": "13 7nd Street",
    "city": "Miami",
    "state": "Fl",
    "postalCode": "33131"
  }
});




// 1.3 | Insert our first products in products collection
// ------------------------------------------------------
// PASTE 3 PRODUCT INSERT QUERIES HERE
db.products.insertMany([{
    "name": "Water Bottle",
    "description": "High quality glass bottle provides a healthier way to drink.  Silicone sleeve provides a good grip, a see-through window, and protects the glass vessel.  Eliminates toxic leaching that plastic can cause.  Innovative design holds 22-1/2 ounces.  Dishwasher safe",
    "category": "Kitchen",
    "price": 23.0
  },

  {
    "name": "Coffee Mug",
    "description": "High quality stainless steel mug provides keeps your coffee at a higher temperature.  Silicone sleeve provides a good grip and protects the mug. Steel gives added durability.  Innovative design holds 16 ounces.  Dishwasher safe",
    "category": "Kitchen",
    "price": 12.0
  },
  {
    "name": "Sunglasses",
    "description": "High quality carbon-fiber rims provides high durability to your sunglasses. Provides UV protection and anti-glare.  Innovative design makes it very light and scratch-proof.",
    "category": "Kitchen",
    "price": 120.0
  },


]);

// 1.4 | Getting Started with queries
// ----------------------------------
// PASTE SHOPPING CART QUERY HERE
db.users.updateOne({
  "firstName": "David"
}, {
  $set: {
    "shopping cart": [{
      "_id": ObjectId("59498c53f6af8cc52200c869")
    }]
  }
});



// PASTE LIST PRODUCTS QUERY HERE

db.products.find().pretty(); {
  "_id": ObjectId("59498c53f6af8cc52200c868"),
  "name": "Water Bottle",
  "description": "High quality glass bottle provides a healthier way to drink.  Silicone sleeve provides a good grip, a see-through window, and protects the glass vessel.  Eliminates toxic leaching that plastic can cause.  Innovative design holds 22-1/2 ounces.  Dishwasher safe",
  "category": "Kitchen",
  "price": 23,
} {
  "_id": ObjectId("59498c53f6af8cc52200c869"),
  "name": "Coffee Mug",
  "description": "High quality stainless steel mug provides keeps your coffee at a higher temperature.  Silicone sleeve provides a good grip and protects the mug. Steel gives added durability.  Innovative design holds 16 ounces.  Dishwasher safe",
  "category": "Kitchen",
  "price": 12
} {
  "_id": ObjectId("59498c53f6af8cc52200c86a"),
  "name": "Sunglasses",
  "description": "High quality carbon-fiber rims provides high durability to your sunglasses. Provides UV protection and anti-glare.  Innovative design makes it very light and scratch-proof.",
  "category": "Active Wear",
  "price": 120
} >


// PASTE CATEGORY PRODUCTS QUERY HERE

>
db.products.find({
    category: "Kitchen"
  }).pretty() {
    "_id": ObjectId("59498c53f6af8cc52200c868"),
    "name": "Water Bottle",
    "description": "High quality glass bottle provides a healthier way to drink.  Silicone sleeve provides a good grip, a see-through window, and protects the glass vessel.  Eliminates toxic leaching that plastic can cause.  Innovative design holds 22-1/2 ounces.  Dishwasher safe",
    "category": "Kitchen",
    "price": 23
  } {
    "_id": ObjectId("59498c53f6af8cc52200c869"),
    "name": "Coffee Mug",
    "description": "High quality stainless steel mug provides keeps your coffee at a higher temperature.  Silicone sleeve provides a good grip and protects the mug. Steel gives added durability.  Innovative design holds 16 ounces.  Dishwasher safe",
    "category": "Kitchen",
    "price": 12
  }


  // PASTE DELETE PRODUCT QUERY HERE

  >
  db.products.deleteOne({
    name: "Water Bottle"
  }) {
    "acknowledged": true,
    "deletedCount": 1
  } >


  // PASTE REVIEW QUERY HERE
  >
  db.products.find({
    name: "Sunglasses"
  }).pretty() {
    "_id": ObjectId("59498c53f6af8cc52200c86a"),
    "name": "Sunglasses",
    "description": "High quality carbon-fiber rims provides high durability to your sunglasses. Provides UV protection and anti-glare.  Innovative design makes it very light and scratch-proof.",
    "category": "Active Wear",
    "price": 120,
    "Reviews": [{
        "Name": "Adrian"
      },
      {
        "Comment": "Comfortable but too dark :-("
      },
      {
        "Stars": 2
      },
      {
        "Date": "2017-05-20T17:35:00"
      }
    ]
  }
