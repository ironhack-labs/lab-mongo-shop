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
{
	"acknowledged" : true,
	"insertedId" : ObjectId("59a5d3cb7e3190d208f55d57")
}

db.users.insertOne( {"firstName": "Danny", "lastName": "Shebshayevich", "dateBirth": "1995,04,18", "address":{ "streetAddress": "120 SW 8th St", "city": "Miami", "state": "FL", "postalCode": "33130"}})
{
	"acknowledged" : true,
	"insertedId" : ObjectId("59a5d6387e3190d208f55d59")
}
db.users.insertOne( {"firstName": "Rachelle", "lastName": "Dauphin", "dateBirth": "1993,01,04", "address":{ "streetAddress": "120 SW 8th St", "city": "Miami", "state": "FL", "postalCode": "33130"}})
{
	"acknowledged" : true,
	"insertedId" : ObjectId("59a5d6787e3190d208f55d5a")
}

// 1.3 | Insert our first products in products collection
// ------------------------------------------------------
// PASTE 3 PRODUCT INSERT QUERIES HERE
db.products.insertOne(
... {
...    "name": "Water Bottle",
...    "description":"High quality glass bottle provides a healthier way to drink.  Silicone sleeve provides a good grip, a see-through window, and protects the glass vessel.  Eliminates toxic leaching that plastic can cause.  Innovative design holds 22-1/2 ounces.  Dishwasher safe",
...    "category":"Kitchen",
...    "price":23.0
... }
... )
{
	"acknowledged" : true,
	"insertedId" : ObjectId("59a5d3eb7e3190d208f55d58")
}

db.products.insertOne({
...    "name": "Broom",
...    "description":"It cleans areas I can’t clean with my hands.",
...    "category":"Kitchen",
...    "price":10.0
... })

{
	"acknowledged" : true,
	"insertedId" : ObjectId("59a5d7187e3190d208f55d5b")
}

db.products.insertOne({
... "name": "iPod nano",
... "description":"To listen to mah jams.",
... "category":"Electronics",
... "price":110.0
... })
{
	"acknowledged" : true,
	"insertedId" : ObjectId("59a5d7817e3190d208f55d5c")
}

// 1.4 | Getting Started with queries
// ----------------------------------
// PASTE SHOPPING CART QUERY HERE
db.users.updateOne(
... {firstName: "Rachelle"},
... {$set:{"shoppingCart":
... [{productsId: '59a5d7187e3190d208f55d5b'},
... {productsId: '59a5d7187e3190d208f55d5b'},
... {productsId: '59a5d7187e3190d208f55d5b'}]}})
{ "acknowledged" : true, "matchedCount" : 1, "modifiedCount" : 1 }


// PASTE LIST PRODUCTS QUERY HERE
db.products.find()
{ "_id" : ObjectId("59a5d3eb7e3190d208f55d58"), "name" : "Water Bottle", "description" : "High quality glass bottle provides a healthier way to drink.  Silicone sleeve provides a good grip, a see-through window, and protects the glass vessel.  Eliminates toxic leaching that plastic can cause.  Innovative design holds 22-1/2 ounces.  Dishwasher safe", "category" : "Kitchen", "price" : 23 }
{ "_id" : ObjectId("59a5d7187e3190d208f55d5b"), "name" : "Broom", "description" : "It cleans areas I can’t clean with my hands.", "category" : "Kitchen", "price" : 10 }
{ "_id" : ObjectId("59a5d7817e3190d208f55d5c"), "name" : "iPod nano", "description" : "To listen to mah jams.", "category" : "Electronics", "price" : 110 }


// PASTE CATEGORY PRODUCTS QUERY HERE
db.products.find( {"category":"Kitchen"})
{ "_id" : ObjectId("59a5d3eb7e3190d208f55d58"), "name" : "Water Bottle", "description" : "High quality glass bottle provides a healthier way to drink.  Silicone sleeve provides a good grip, a see-through window, and protects the glass vessel.  Eliminates toxic leaching that plastic can cause.  Innovative design holds 22-1/2 ounces.  Dishwasher safe", "category" : "Kitchen", "price" : 23 }
{ "_id" : ObjectId("59a5d7187e3190d208f55d5b"), "name" : "Broom", "description" : "It cleans areas I can’t clean with my hands.", "category" : "Kitchen", "price" : 10 }


// PASTE DELETE PRODUCT QUERY HERE
db.products.deleteOne(
... {category:"Kitchen"})
{ "acknowledged" : true, "deletedCount" : 1 }
> db.products.find( {"category":"Kitchen"})
{ "_id" : ObjectId("59a5d7187e3190d208f55d5b"), "name" : "Broom", "description" : "It cleans areas I can’t clean with my hands.", "category" : "Kitchen", "price" : 10 }

// PASTE REVIEW QUERY HERE
db.products.updateOne(
... {name:"Broom"},
... {$set: {"reviews":[{
... "name": "Shannon",
... "Comment": "This broom is the incredible",
... "Stars": 5,
... "Date": "2016-11-10T18:28:09.369Z"
... }
... ]
... }})
{ "acknowledged" : true, "matchedCount" : 1, "modifiedCount" : 1 }

