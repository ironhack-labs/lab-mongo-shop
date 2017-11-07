// 1.2 | Insert our first users in users collection
// ------------------------------------------------
/*
add users
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
})


// 1.3 | Insert our first products in products collection
// ------------------------------------------------------
db.products.insertOne({
   "name": "vino",
   "description":"High quality glass bottle provides a healthier way to drink.  Silicone sleeve provides a good grip, a see-through window, and protects the glass vessel.  Eliminates toxic leaching that plastic can cause.  Innovative design holds 22-1/2 ounces.  Dishwasher safe",
   "category":"Kitchen",
   "price":23.0
})


// 1.4 | Getting Started with queries
// ----------------------------------
// PASTE SHOPPING CART QUERY HERE
db.users.updateOne({"firstName":"pablo"},{ $push:{"shoppingCart":[ ObjectId("5a0198cf3457cf9e3b2cdba1"), ObjectId("5a01a562dd7709056c9baa97")]} })

// PASTE LIST PRODUCTS QUERY HERE
db.products.find().pretty()

// PASTE CATEGORY PRODUCTS QUERY HERE
db.products.find({"category":"Kitchen"}).pretty()

// PASTE DELETE PRODUCT QUERY HERE
db.products.deleteOne({"_id":ObjectId("5a01a562dd7709056c9baa97")})

// PASTE REVIEW QUERY HERE
db.products.updateOne({"name":"Water Bottle"},{$set:{"reviews":[{"name": "Shannon","comment": "This is so warm and comfortable.","stars": 2,"date": "2016-11-10T18:28:09.369Z"}]}})
*/
