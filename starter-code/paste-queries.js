// 1.2 | Insert our first users in users collection
// ------------------------------------------------
// PASTE 3 USER INSERT QUERIES HERE
var user1 = {   "firstName": "John",   "lastName": "Smith",   "dateBirth": ISODate("2016-12-10T18:28:09.369Z"),   "address": {     "streetAddress": "21 2nd Street",     "city": "New York",     "state": "NY",     "postalCode": "10021"   } }
var user2 = {   "firstName": "Andreas",   "lastName": "Karpasitis",   "dateBirth": ISODate("2016-12-10T18:28:09.369Z"),   "address": {     "streetAddress": "21 2nd Street",     "city": "New York",     "state": "NY",     "postalCode": "10021"   } }
var user3 = {   "firstName": "Sergi",   "lastName": "Garcia",   "dateBirth": ISODate("2016-12-10T18:28:09.369Z"),   "address": {     "streetAddress": "21 2nd Street",     "city": "New York",     "state": "NY",     "postalCode": "10021"   } }
db.users.insertMany([user1, user2, user3])

// 1.3 | Insert our first products in products collection
// ------------------------------------------------------
// PASTE 3 PRODUCT INSERT QUERIES HERE
var product1 = {    "name": "Water Bottle",    "description":"High quality glass bottle provides a healthier way to drink.  Silicone sleeve provides a good grip, a see-through window, and protects the glass vessel.  Eliminates toxic leaching that plastic can cause.  Innovative design holds 22-1/2 ounces.  Dishwasher safe",    "category":"Kitchen",    "price":23.0 }
var product2 = {    "name": "Orange Juice",    "description":"High quality glass bottle provides a healthier way to drink.  Silicone sleeve provides a good grip, a see-through window, and protects the glass vessel.  Eliminates toxic leaching that plastic can cause.  Innovative design holds 22-1/2 ounces.  Dishwasher safe",    "category":"Kitchen",    "price":23.0 }
var product3 = {    "name": "Beer",    "description":"High quality glass bottle provides a healthier way to drink.  Silicone sleeve provides a good grip, a see-through window, and protects the glass vessel.  Eliminates toxic leaching that plastic can cause.  Innovative design holds 22-1/2 ounces.  Dishwasher safe",    "category":"Kitchen",    "price":23.0 }
db.products.insertMany([product1,product2,product3])

// 1.4 | Getting Started with queries
// ----------------------------------
// PASTE SHOPPING CART QUERY HERE
db.users.updateOne({"firstName":"John"},{$push:{"shoppingCart":ObjectId("58ff576c60e4e34bd360acd3")}})

// PASTE LIST PRODUCTS QUERY HERE
db.products.find()

// PASTE CATEGORY PRODUCTS QUERY HERE
db.products.find({"category":"Kitchen"})

// PASTE DELETE PRODUCT QUERY HERE
db.products.deleteOne({"name":"Beer"})

// PASTE REVIEW QUERY HERE
db.products.updateOne({name: "Water Bottle"},{$push:{"reviews":{ "name":"Sergi","comment":"mal"}}})
