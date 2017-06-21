// 1.2 | Insert our first users in users collection
// ------------------------------------------------
// PASTE 3 USER INSERT QUERIES HERE
db
myShop
> db.users.insertOne({
...   "firstName": "John",
...   "lastName": "Smith",
...   "dateBirth": ISODate("2016-12-10T18:28:09.369Z"),
...   "address": {
...     "streetAddress": "21 2nd Street",
...     "city": "New York",
...     "state": "NY",
...     "postalCode": "10021"
...   }
... })
{
	"acknowledged" : true,
	"insertedId" : ObjectId("594989cca8f6d2b0f57c2586")
}
> db.users.insertOne({
... "firstName": "RJ",
... "lastName": "Jones",
... "dateBirth": ISODate("1986-06-04"),
... "address": {
... "streetAddress": "23 4th Street",
... "city": "Miami",
... "state": "FL",
... "postalCode": "10021"
... }
... })
db.users.insertOne({"firstName": "Val","lastName": "Duran", "dateBirth": ISODate("1975-05-19"),"address": {"streetAddress": "123 Sesame Street","city": "Miami","state": "FL","postalCode": "10021" }})



// 1.3 | Insert our first products in products collection
// ------------------------------------------------------
// PASTE 3 PRODUCT INSERT QUERIES HERE
db.products.insertOne({"name": "Water Bottle",
...    "description":"High quality glass bottle provides a healthier way to drink.  Silicone sleeve provides a good grip, a see-through window, and protects the glass vessel.  Eliminates toxic leaching that plastic can cause.  Innovative design holds 22-1/2 ounces.  Dishwasher safe",
...    "category":"Kitchen",
...    "price":23.0
... })
{
	"acknowledged" : true,
	"insertedId" : ObjectId("59498d68a8f6d2b0f57c2589")
}
> db.products.insertOne({"name": "Mac", "description": "computer that works, nothing fancyand not a lemon", "category": "computers", "price": "too much"})
{
	"acknowledged" : true,
	"insertedId" : ObjectId("59498e2fa8f6d2b0f57c258a")
}
> db.products.insertOne({"name": "book", "description": "the best book i ever read", "category": "consumer media", "price": "$9.99"})
{
	"acknowledged" : true,
	"insertedId" : ObjectId("59498ea4a8f6d2b0f57c258b")
}
> db.products.find()
{ "_id" : ObjectId("59498d68a8f6d2b0f57c2589"), "name" : "Water Bottle", "description" : "High quality glass bottle provides a healthier way to drink.  Silicone sleeve provides a good grip, a see-through window, and protects the glass vessel.  Eliminates toxic leaching that plastic can cause.  Innovative design holds 22-1/2 ounces.  Dishwasher safe", "category" : "Kitchen", "price" : 23 }
{ "_id" : ObjectId("59498e2fa8f6d2b0f57c258a"), "name" : "Mac", "description" : "computer that works, nothing fancyand not a lemon", "category" : "computers", "price" : "too much" }
{ "_id" : ObjectId("59498ea4a8f6d2b0f57c258b"), "name" : "book", "description" : "the best book i ever read", "category" : "consumer media", "price" : "$9.99" }
>

// 1.4 | Getting Started with queries
// ----------------------------------
// PASTE SHOPPING CART QUERY HERE
db.users.updateOne({"firstName": "RJ"},{$set:{"shoppingCart": []}})

db.users.updateOne({"firstName":"RJ"},{$push:{"shoppingCart":"ObjectId('59498e2fa8f6d2b0f57c258a')"}})
{ "acknowledged" : true, "matchedCount" : 1, "modifiedCount" : 1 }

db.users.updateOne({"firstName": "Val"},{$set:{"shoppingCart": []}})

> db.users.updateOne({"firstName":"Val"}, {$push:{"shoppingCart":"ObjectId('59498ea4a8f6d2b0f57c258b')"}})
{ "acknowledged" : true, "matchedCount" : 1, "modifiedCount" : 1 }


// PASTE LIST PRODUCTS QUERY HERE
db.products.find().pretty()

// PASTE CATEGORY PRODUCTS QUERY HERE

db.products.find({"category":"Kitchen"}).pretty()
// PASTE DELETE PRODUCT QUERY HERE
db.products.deleteOne({"category":"Kitchen"})
{ "acknowledged" : true, "deletedCount" : 1 }

// PASTE REVIEW QUERY HERE
db.products.updateOne({name:"book"},{$set:{"reviews": [{"name":"Val", "comment":"Best Book Ever!", "stars":5, "date":"2016-11-10T18:28:09.369Z"}]}})
