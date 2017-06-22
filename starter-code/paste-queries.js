// 1.2 | Insert our first users in users collection
// ------------------------------------------------
// PASTE 3 USER INSERT QUERIES HERE
db.users.insertOne({"firstName" : "Zofia",
... "lastName" : "Szczudlik",
... "dateBirth" : ISODate("1979-02-02T18:28:09.369Z"),
... "address" : {
...   "streetAddress" : "San Ambrosio 8",
...   "city" : "Madrid",
...   "state" : null,
...   "postalCode" : "28011"
... },
... "shoppingCart" : [ ]})

db.users.insertOne({"firstName" : "Miguel",
... "lastName" : "Perez",
... "dateBirth" : ISODate("1983-11-10T18:28:09.369Z"),
... "address" : {
...   "streetAddress" : "Antonio Toledano 22",
...   "city" : "Madrid",
...   "state" : null,
...   "postalCode" : "28028"
... },
... "shoppingCart" : [ ]})


// 1.3 | Insert our first products in products collection
// ------------------------------------------------------
// PASTE 3 PRODUCT INSERT QUERIES HERE
> db.products.insertOne({"name": "Blanket",
... "description":"Warm and cosy",
... "category":"Living-room",
... "price":17.0})

db.products.insertOne({"name": "Mug",
... "description":"Perfect for your morning coffee",
... "category":"Kitchen",
... "price":9.0})

// 1.4 | Getting Started with queries
// ----------------------------------
// PASTE SHOPPING CART QUERY HERE
db.users.updateOne({firstName: "Zofia"}, {$push: {"shoppingCart": ObjectId("594a3f5531a8e2a5dfa3655b") }} )

// PASTE LIST PRODUCTS QUERY HERE
db.products.find().pretty()

// PASTE CATEGORY PRODUCTS QUERY HERE
db.products.find({category: "Kitchen"}, {name: 1, _id: 0})

// PASTE DELETE PRODUCT QUERY HERE
db.products.deleteOne({name: "Water Bottle"})

// PASTE REVIEW QUERY HERE
db.products.updateOne({name: "Blanket"}, {$set: {"reviews": [{"name": "Shannon", "comment": "This is so warm and confortable.", "stars": 2, "date": "2016-11-10T18:28:09.369Z"}]}})
