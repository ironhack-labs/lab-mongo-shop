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
})

db.users.insertOne({
  "firstName": "Alejandro",
  "lastName": "Roman",
  "dateBirth": ISODate("2016-12-10T18:28:09.369Z"),
  "address": {
    "streetAddress": "45 stuart st",
    "city": "Boston",
    "state": "MA",
    "postalCode": "12321"
  }
})

db.users.insertOne({
  "firstName": "Alfonso",
  "lastName": "Moncada",
  "dateBirth": ISODate("2016-12-10T18:28:09.369Z"),
  "address": {
    "streetAddress": "6124 Adam Bl",
    "city": "Baltimore",
    "state": "MD",
    "postalCode": "21342"
  }
})

// 1.3 | Insert our first products in products collection
// ------------------------------------------------------
// PASTE 3 PRODUCT INSERT QUERIES HERE
db.product.insertOne({
   "name": "Water Bottle",
   "description":"High quality glass bottle provides a healthier way to drink.  Silicone sleeve provides a good grip, a see-through window, and protects the glass vessel.  Eliminates toxic leaching that plastic can cause.  Innovative design holds 22-1/2 ounces.  Dishwasher safe",
   "category":"Kitchen",
   "price":23.0
})


db.product.insertOne({
   "name": "Coca Cola",
   "description":"Refreshing soda",
   "category":"Kitchen",
   "price":15.0
})


db.product.insertOne({
   "name": "Grilled Chicken",
   "description":" Delicious grilled chiken",
   "category":"Kitchen",
   "price":30.0
})
// 1.4 | Getting Started with queries
// ----------------------------------
// PASTE SHOPPING CART QUERY HERE
db.users.updateOne(
  {"firstName": "Alfonso"},
  { $push: {"ShoppingCart": ObjectId("5a0206fcc07ba58a983fd717") }}
)

db.users.updateOne(
  {"firstName": "John"},
  { $push: {"ShoppingCart": ObjectId("5a0208e3c07ba58a983fd71a") }}
)
db.users.updateOne(
  {"firstName": "Alejandro"},
  { $push: {"ShoppingCart": ObjectId("5a0208e4c07ba58a983fd71b") }}
)


db.users.find({},{ShoppingCart :1}
)

// PASTE LIST PRODUCTS QUERY HERE
db.product.find().pretty()

// PASTE CATEGORY PRODUCTS QUERY HERE
db.product.find({category:"Kitchen"})

// PASTE DELETE PRODUCT QUERY HERE
db.product.deleteOne({
  "_id": ObjectId("5a0208e4c07ba58a983fd71b")
})


// PASTE REVIEW QUERY HERE
db.product.updateOne(
  {"name" : "Grilled Chicken"},
  { $push: {"review": [
    {
      "name": "Shannon",
      "comment": "This is so warm and comfortable.",
      "stars": 2,
      "date": "2016-11-10T18:28:09.369Z"
    }
  ]
   }
 }
)
