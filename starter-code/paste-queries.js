// 1.2 | Insert our first users in users collection
// ------------------------------------------------
> db.users.find().pretty()
{
	"_id" : ObjectId("59498364bae9e3efcbbf5ae9"),
	"firstName" : "John",
	"lastName" : "Smith",
	"dateBirth" : ISODate("2016-12-10T18:28:09.369Z"),
	"address" : {
		"streetAddress" : "21 2nd Street",
		"city" : "New York",
		"state" : "NY",
		"postalCode" : "10021"
	}
}

> db.users.insertOne(
... {
... "firstName": "Jessica",
... "lastName": "van der Marel",
... "dateBirth": ISODate("1988-09-31T18:28:09.369Z"),
... "address": {
... "streetAddress": "9601 SW 142nd AV",
... "city": "Miami",
... "state": "FL",
... "postalCode": "33186"
... }
... }
... )
{
	"acknowledged" : true,
	"insertedId" : ObjectId("594988898244faf573650f98")
}


> db.users.insertOne(
... {
... "firstName": "Crystal",
... "lastName": "Jones",
... "dateBirth": ISODate("1985-07-23T18:28:09.369Z"),
... "address": {
... "streetAdddress": "1600 E Sunrise Blvd",
... "city": "Miami",
... "state": "FL",
... "postalCode": "33304"
... }
... })


// 1.3 | Insert our first products in products collection
// ------------------------------------------------------
> db.products.insertOne(
... {
...    "name": "Water Bottle",
...    "description":"High quality glass bottle provides a healthier way to drink.  Silicone sleeve provides a good grip, a see-through window, and protects the glass vessel.  Eliminates toxic leaching that plastic can cause.  Innovative design holds 22-1/2 ounces.  Dishwasher safe",
...    "category":"Kitchen",
...    "price":23.0
... })

> db.products.insertOne(
... {
... "name": "Backpack",
... "description": "Bag to carry things",
... "category": "Accessories",
... "price": 29.99
... })

> db.products.insertOne(
... {
... "name": "T-shirt",
... "description": "Amazing shirt",
... "category": "Clothing",
... "price": 19.99
... })

> db.products.insertOne( {
... "name": "Pants",
... "description": "Amazing pants",
... "category": "Clothing",
... "price": 19.99
... })


// 1.4 | Getting Started with queries
// ----------------------------------
//PASTE SHOPPING CART QUERY HERE
"_id" : ObjectId("59498364bae9e3efcbbf5ae9"),
"firstName" : "John",
"lastName" : "Smith",
"dateBirth" : ISODate("2016-12-10T18:28:09.369Z"),
"address" : {
  "streetAddress" : "21 2nd Street",
  "city" : "New York",
  "state" : "NY",
  "postalCode" : "10021"
},
"shoppingCart" : [
  ObjectId("582e3dd006a0c0b81841f47e"),
  ObjectId("582e3cc7b03b5db7dd616cc8")
]
}
{
"_id" : ObjectId("594988898244faf573650f98"),
"firstName" : "Jessica",
"lastName" : "van der Marel",
"dateBirth" : ISODate("1988-10-01T18:28:09.369Z"),
"address" : {
  "streetAddress" : "9601 SW 142nd AV",
  "city" : "Miami",
  "state" : "FL",
  "postalCode" : "33186"
},
"shoppingCart" : [
  ObjectId("582e3dd006a0c0b81841f47e"),
  ObjectId("582e3cc7b03b5db7dd616cc8")
]
}
{
"_id" : ObjectId("5949895d8244faf573650f99"),
"firstName" : "Crystal",
"lastName" : "Jones",
"dateBirth" : ISODate("1985-07-23T18:28:09.369Z"),
"address" : {
  "streetAdddress" : "1600 E Sunrise Blvd",
  "city" : "Miami",
  "state" : "FL",
  "postalCode" : "33304"
},
"shoppingCart" : [
  ObjectId("582e3dd006a0c0b81841f47e"),
  ObjectId("582e3cc7b03b5db7dd616cc8")
]
}


// PASTE LIST PRODUCTS QUERY HERE
db.products.insertOne(
... {
...    "name": "Water Bottle",
...    "description":"High quality glass bottle provides a healthier way to drink.  Silicone sleeve provides a good grip, a see-through window, and protects the glass vessel.  Eliminates toxic leaching that plastic can cause.  Innovative design holds 22-1/2 ounces.  Dishwasher safe",
...    "category":"Kitchen",
...    "price":23.0
... })

> db.products.insertOne(
... {
... "name": "Backpack",
... "description": "Bag to carry things",
... "category": "Accessories",
... "price": 29.99
... })

> db.products.insertOne(
... {
... "name": "T-shirt",
... "description": "Amazing shirt",
... "category": "Clothing",
... "price": 19.99
... })

> db.products.insertOne( {
... "name": "Pants",
... "description": "Amazing pants",
... "category": "Clothing",
... "price": 19.99
... })


// PASTE CATEGORY PRODUCTS QUERY HERE
> db.products.find( {"category": "Clothing"}).pretty()
{
	"_id" : ObjectId("59498b4f8244faf573650f9c"),
	"name" : "T-shirt",
	"description" : "Amazing shirt",
	"category" : "Clothing",
	"price" : 19.99
}
{
	"_id" : ObjectId("59498bd68244faf573650f9d"),
	"name" : "Pants",
	"description" : "Amazing pants",
	"category" : "Clothing",
	"price" : 19.99
}


// PASTE DELETE PRODUCT QUERY HERE

> db.products.deleteOne(
... {"name": "Pants"})
{ "acknowledged" : true, "deletedCount" : 1 }

// PASTE REVIEW QUERY HERE

> db.products.find().pretty()
{
	"_id" : ObjectId("594989b18244faf573650f9a"),
	"name" : "Water Bottle",
	"description" : "High quality glass bottle provides a healthier way to drink.  Silicone sleeve provides a good grip, a see-through window, and protects the glass vessel.  Eliminates toxic leaching that plastic can cause.  Innovative design holds 22-1/2 ounces.  Dishwasher safe",
	"category" : "Kitchen",
	"price" : 23,
	"reviews" : [
		{
			"name" : "Shannon",
			"comment" : "I love this Water Bottle!",
			"stars" : 5,
			"date" : "2016-11-10T18:28:09.369Z"
		}
