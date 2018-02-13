// 1.2 | Insert our first users in users collection
// ------------------------------------------------
// PASTE 2 USER INSERT QUERIES HERE
db.users.insertOne({"firstName":"Raul", "lastName":"Merino", "dateBirth": ISODate("1989-06-04T18:28:09.369Z"),"address":{"streetAddress":"32 San Antonio", "city":"Mexico City", "state":"Mexico","postalCode":"10021"}})
db.users.insertOne({"firstName":"Enrique", "lastName":"Garcia", "dateBirth": ISODate("1986-02-18T18:28:09.369Z"),"address":{"streetAddress":"45 Descartes", "city":"Mexico City", "state":"Mexico","postalCode":"10021"}})

// 1.3 | Insert our first products in products collection
// ------------------------------------------------------
// PASTE 2 PRODUCT INSERT QUERIES HERE
db.products.insertOne({"name":"Indian Food", "description":"Spicy", "category":"Food", "price":33.0})
db.products.insertOne({"name":"Animal Farm", "description":"It's long", "category":"Books", "price":45.0})

// 1.4 | Getting Started with queries
// ----------------------------------
// PASTE SHOPPING CART QUERY HERE
db.users.update({"firstName":"John"}, {$set:{"shoppingCart":"[{ "_id" : ObjectId("5a8326fc9ff69b0b28f5261f")}]"}})

// PASTE LIST PRODUCTS QUERY HERE
db.products.find().pretty()

// PASTE CATEGORY PRODUCTS QUERY HERE
db.products.find({"category" : "Kitchen"})db.products.find({"category" : "Kitchen"})

// PASTE DELETE PRODUCT QUERY HERE
db.products.deleteOne({"name":"Animal Farm"})db.products.deleteOne({"name":"Animal Farm"})

// PASTE REVIEW QUERY HERE
db.products.update({"name":"Indian Food"}, {$set:{"reviews":[{"name":"Enrique", "comment":"Esta rico", "stars":5, "date":"2018-02-13T18:28:09.369Z"}]}})
