// 1.2 | Insert our first users in users collection
// ------------------------------------------------
// PASTE 3 USER INSERT QUERIES HERE
db.users.insertOne(
... {
...   "firstName": "John",
...   "lastName": "Smith",
...   "dateBirth": ISODate("2016-12-10T18:28:09.369Z"),
...   "address": {
...     "streetAddress": "21 2nd Street",
...     "city": "New York",
...     "state": "NY",
...     "postalCode": "10021"
...   }
... }
... )

db.users.insertOne(
... {
... firstName: "Stuart",
... lastName: "Little",
... dateBirth: ISODate("2016-13-10T18:28:09.456Z"),
... address: {
... streetAddress: "43 Shit Street",
... city: "Newark",
... state: "NJ",
... postalCode: "32456"
... }
... }
... )
db.users.insertOne(
... {
... firstName: "Greg",
... lastName: "Fuckface",
... dateBirth: ISODate("2014-13-10T18:28:09.456Z"),
... address: {
... streetAddress: "43 BlowMe Blvd",
... city: "Miami",
... state: "FL",
... postalCode: "33173"
... }
... }
... )

// 1.3 | Insert our first products in products collection
// ------------------------------------------------------
// PASTE 3 PRODUCT INSERT QUERIES HERE
db.products.insertOne({
...    "name": "Water Bottle",
...    "description":"High quality glass bottle provides a healthier way to drink.  Silicone sleeve provides a good grip, a see-through window, and protects the glass vessel.  Eliminates toxic leaching that plastic can cause.  Innovative design holds 22-1/2 ounces.  Dishwasher safe",
...    "category":"Kitchen",
...    "price":23.0
... }
... )
db.products.insertOne({
...    "name": "Butterfly Knife",
...    "description":"For when you need to cut a Bitch but wanna get flashy",
...    "category":"Weapons",
...    "price":25.0
... }
... )
db.products.insertOne({
...    "name": "Condom",
...    "description":"Cuz you got shitty pull-out game",
...    "category":"Utilities",
...    "price":5.0
... }
... )

// 1.4 | Getting Started with queries
// ----------------------------------
// PASTE SHOPPING CART QUERY HERE
> db.users.updateOne(
... {firstName: "Stuart"},{$set:{shoppingCart:[ObjectId("59497e5af7e4f066a7336764"),ObjectId("59498994ac613cc638b384fb"),ObjectId("5949899aac613cc638b384fc")]}})

// PASTE LIST PRODUCTS QUERY HERE
> db.products.find().pretty()

// PASTE CATEGORY PRODUCTS QUERY HERE
 db.products.find({category: "Utilities"}).pretty()
// PASTE DELETE PRODUCT QUERY HERE
> db.products.deleteOne({name:"Water Bottle"})

// PASTE REVIEW QUERY HERE
db.products.updateOne(
... {name: "Condom"},
... {$set:{
... reviews: [
... {
...  name: "Shannon",
...   comment: "This is so warm and comfortable.",
...  stars: 5,
...     date: "2016-11-10T18:28:09.369Z"
... }
... ]
... }
... }
... )
