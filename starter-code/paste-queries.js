// 1.2 | Insert our first users in users collection
// ------------------------------------------------
// PASTE 3 USER INSERT QUERIES HERE
mongoimport --db myShop --collection users --file users.json
db.users.insertOne({"firstName":"Manuel", "lastName":"Avello"})
db.users.insertOne({"firstName":"Vero", "lastName":"Glez"})


// 1.3 | Insert our first products in products collection
// ------------------------------------------------------
// PASTE 3 PRODUCT INSERT QUERIES HERE
mongoimport --db myShop --collection products --file products.json
db.users.insertOne({"name":"Biscuits", "description":"These biscuits are disgusting!!"})
db.users.insertOne({"name":"Chicken croquettes", "description":"These chicken croquettes are delicious!!"})


// 1.4 | Getting Started with queries
// ----------------------------------
// PASTE SHOPPING CART QUERY HERE
db.users.updateOne( {"firstName":"John"}, {$set: {"shoppingCart": [{"_id" : ObjectId("59aeaaa92a4e1aac7499614f"),} ] } } )
db.users.updateOne( {"firstName":"John"}, {$push: {"shoppingCart":{"_id" : ObjectId("59aeb1a82f107edbbe2eb040")}  } } )

// PASTE LIST PRODUCTS QUERY HERE
db.products.find().pretty()

// PASTE CATEGORY PRODUCTS QUERY HERE
db.products.find({category: {$eq: 'Kitchen'}}).pretty()

// PASTE DELETE PRODUCT QUERY HERE
db.users.deleteOne( {"name" : "Biscuits")} )

// PASTE REVIEW QUERY HERE
