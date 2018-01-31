// 1.2 | Insert our first users in users collection
// ------------------------------------------------
// PASTE 3 USER INSERT QUERIES HERE
mongoimport --db myShop --collection users --file ./data/users.json

// 1.3 | Insert our first products in products collection
// ------------------------------------------------------
// PASTE 3 PRODUCT INSERT QUERIES HERE
db.products.insertOne({"name": "Water Bottle", "description": "High quality glass bottle provides a healthy way to drink.", "category":"kitchen","price": 23.0})
db.products.insertOne({"name": "Bed", "description": "Bed for sleep.", "category":"bedroom","price": 230.0})
db.products.insertOne({"name": "Lamp", "description": "Lamp for ligth.", "category":"bedroom","price": 50.0})

// 1.4 | Getting Started with queries
// ----------------------------------
// PASTE SHOPPING CART QUERY HERE
db.users.updateOne({"firstName": "Sebastian"},{$set: {"shoppingCart": ObjectId("5a708a64a0b7662bd51fee66")}})
db.users.updateOne({"firstName": "Jesús"},{$set: {"shoppingCart": ObjectId("5a708a1ca0b7662bd51fee65")}})

// PASTE LIST PRODUCTS QUERY HERE
db.products.find()

// PASTE CATEGORY PRODUCTS QUERY HERE
db.products.find({category: bedroom})

// PASTE DELETE PRODUCT QUERY HERE
db.products.deleteOne({"_id": ObjectId("5a708a1ca0b7662bd51fee65")})

// PASTE REVIEW QUERY HERE
db.products.updateMany({"name":"Bed"},{$set: {"review":[{"name": "Sebastian", "comment":"this is so warm and confortable","stars":3,"date":"2018-01-30T18:20:09.369Z"}]}})
