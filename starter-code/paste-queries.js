// 1.2 | Insert our first users in users collection
// ------------------------------------------------
// PASTE 3 USER INSERT QUERIES HERE

db.users.insertOne({
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
	"insertedId" : ObjectId("59a5d5b1f167959437e22d73")
}

db.users.insertOne({
... "firstName": "Emma",
... "lastName": "Salles",
... "dateBirth": ISODate("1993-10-31T18:28:09.369Z"),
... "address":{
...  "streetAddress":"214 Hamilton Avenue",
... "city": "Glen Rock",
... "state":"NJ",
... "postalCode":"07452"
... }
... })
{
	"acknowledged" : true,
	"insertedId" : ObjectId("59a5d816f167959437e22d75")
  
  db.users.insertOne({
... "firstName":"Fumnanya",
... "lastName":"Agbimson",
... "dateBirth":ISODate("1993-11-25T18:28:09.369Z"),
... "address": {
... "streetAddress": "23 Russell Street",
... "city": "New York",
... "state":"NY",
... "postalCode": "10021"
... }
... })
{
	"acknowledged" : true,
	"insertedId" : ObjectId("59a5d91ff167959437e22d76")
}


// 1.3 | Insert our first products in products collection
// ------------------------------------------------------
// PASTE 3 PRODUCT INSERT QUERIES HERE

> db.products.insertOne({
...    "name": "Water Bottle",
...    "description":"High quality glass bottle provides a healthier way to drink.  Silicone sleeve provides a good grip, a see-through window, and protects the glass vessel.  Eliminates toxic leaching that plastic can cause.  Innovative design holds 22-1/2 ounces.  Dishwasher safe",
...    "category":"Kitchen",
...    "price":23.0
... })
{
	"acknowledged" : true,
	"insertedId" : ObjectId("59a5d625f167959437e22d74")
}
  
  > db.products.insertOne({
... "name": "Swell Bottle",
... "description":"Cool colored water bottle that keeps liquids cold for 24hours or hot for 12",
... "category":"Kitchen",
... "price":40.0
... })
{
	"acknowledged" : true,
	"insertedId" : ObjectId("59a5d9c4f167959437e22d77")
}
> 
  
  > db.products.insertOne({
... "name": "macbook",
... "description":"laptop by apple",
... "category":"technology",
... "price":1000.0
... })
{
	"acknowledged" : true,
	"insertedId" : ObjectId("59a5da48f167959437e22d78")
}
> 


// 1.4 | Getting Started with queries
// ----------------------------------
// PASTE SHOPPING CART QUERY HERE
  
  > db.users.updateOne(
... ... { firstName: "Emma" },
... ... {
... ...   $set: {
... ...     shoppingCart: [
... ...       ObjectId("59a5d625f167959437e22d74"),
... ...       ObjectId("59a5d9c4f167959437e22d77")
... ...     ]
... ...   }
... ... }


// PASTE LIST PRODUCTS QUERY HERE
  
   db.products.find().pretty()



// PASTE CATEGORY PRODUCTS QUERY HERE
  
  db.products.find(
... {category: 'Kitchen'},
... {name: 1}).pretty()
{ "_id" : ObjectId("59a5d625f167959437e22d74"), "name" : "Water Bottle" }
{ "_id" : ObjectId("59a5d9c4f167959437e22d77"), "name" : "Swell Bottle" }
> 


// PASTE DELETE PRODUCT QUERY HERE
  
  db.products.deleteOne( {
... name: "Water Bottle" 
... })
{ "acknowledged" : true, "deletedCount" : 1 }


// PASTE REVIEW QUERY HERE
  
  > db.products.updateOne(
... ... { name: "Swell Bottle" },
... ... {
... ... $set: {
... ... reviews:  [
... ... {
... ... "name": "Carlos",
... ... "comment": "This water bottle only kept my liquids hot for 11 hours.",
... ... "stars": 3,
... ... "date": "2016-11-10T18:28:09.369Z"
... ... }
...    ]
... }})
{ "acknowledged" : true, "matchedCount" : 1, "modifiedCount" : 1 }

