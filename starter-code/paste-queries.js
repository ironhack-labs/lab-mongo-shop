// 1.2 | Insert our first users in users collection
// ------------------------------------------------
// PASTE 3 USER INSERT QUERIES HERE

db.users.insertOne{ "firstName": "Beltran", "lastName": "Rengifo", "dateBirth": ISODate("2014-10-10T18:28:09.369Z"), "address": { "streetAddress": "Elfo 32", "city": "Madrid", "state": "MD", "postalCode": "28027" } }

// 1.3 | Insert our first products in products collection
// ------------------------------------------------------
// PASTE 3 PRODUCT INSERT QUERIES HERE

db.products.insertOne({ "name": "Bocadillo de Chorizo", "description": "healthy healthy", "category": "Sandwich", "price": 3.5 })


// 1.4 | Getting Started with queries
// ----------------------------------
// PASTE SHOPPING CART QUERY HERE

db.users.updateOne({ "firstName": "Miguel" }, { $set: { "shoppingCart": [ObjectId("5a7085ff43460f10c1129a9a"), ObjectId("5a70857e1e4c71a03e805450")] } })

// PASTE LIST PRODUCTS QUERY HERE

db.products.find().pretty()

// PASTE CATEGORY PRODUCTS QUERY HERE

db.products.find({ "category": "sodas" }).pretty()
db.products.find({ "category": "sodas" }).pretty().count()

// PASTE DELETE PRODUCT QUERY HERE

db.products.deleteOne({ "name": "Water Bottle" })

// PASTE REVIEW QUERY HERE

db.products.updateMany({ "name": "Bocadillo de Chorizo" }, { $set: { "reviews": [{ "name": "Pepito", "comment": "Está cojonudo", "stars": "5", "date": "2018-01-20T18:28:09.369Z" }] } })