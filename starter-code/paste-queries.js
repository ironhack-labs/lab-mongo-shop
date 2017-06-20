// 1.2 | Insert our first users in users collection

db.users.find().pretty()
 {
 	"_id" : ObjectId("5949876417b9b7d9e4b97d88"),
 	"firstName" : "John",
 	"lastName" : "Smith",
 	"dateBirth" : ISODate("2016-12-10T18:28:09.369Z"),
 	"address" : {
 		"streetAddress" : "21 2nd Street",
 		"city" : "New York",
 		"state" : "NY",
 		"postalCode" : "10021"
 	}

// ------------------------------------------------
// PASTE 3 USER INSERT QUERIES HERE

db.users.find().pretty()
 {
 	"_id" : ObjectId("5949876417b9b7d9e4b97d88"),
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
 {
 	"_id" : ObjectId("5949888b17b9b7d9e4b97d89"),
 	"firstName" : "Jessica",
 	"lastName" : "van der Marel",
 	"dateBirth" : ISODate("1988-10-01T18:28:09.369Z"),
 	"address" : {
 		"streetAddress" : "9601 SW 142nd AV",
 		"city" : "Miami",
 		"state" : "FL",
 		"postalCode" : "33186"
 	}
 }
 {
 	"_id" : ObjectId("5949895d17b9b7d9e4b97d8a"),
 	"firstName" : "Crystal",
 	"lastName" : "Jones",
 	"dateBirth" : ISODate("1985-07-23T18:28:09.369Z"),
 	"address" : {
 		"streetAddress" : "1600 E Sunrise Blvd",
 		"city" : "Miami",
 		"state" : "FL",
 		"postalCode" : "33304"
 	}
 }


// 1.3 | Insert our first products in products collection

> db.products.find().pretty()
{
	"_id" : ObjectId("594989b217b9b7d9e4b97d8b"),
	"name" : "Water Bottle",
	"description" : "High quality glass bottle provides a healthier way to drink.  Silicone sleeve provides a good grip, a see-through window, and protects the glass vessel.  Eliminates toxic leaching that plastic can cause.  Innovative design holds 22-1/2 ounces.  Dishwasher safe",
	"category" : "Kitchen",
	"price" : 23
}

// ------------------------------------------------------
// PASTE 3 PRODUCT INSERT QUERIES HERE


// 1.4 | Getting Started with queries
// ----------------------------------
// PASTE SHOPPING CART QUERY HERE

> db.users.find().pretty()
{
	"_id" : ObjectId("5949876417b9b7d9e4b97d88"),
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
	"_id" : ObjectId("5949888b17b9b7d9e4b97d89"),
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
	"_id" : ObjectId("5949895d17b9b7d9e4b97d8a"),
	"firstName" : "Crystal",
	"lastName" : "Jones",
	"dateBirth" : ISODate("1985-07-23T18:28:09.369Z"),
	"address" : {
		"streetAddress" : "1600 E Sunrise Blvd",
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
> db.products.find().pretty()
{
	"_id" : ObjectId("594989b217b9b7d9e4b97d8b"),
	"name" : "Water Bottle",
	"description" : "High quality glass bottle provides a healthier way to drink.  Silicone sleeve provides a good grip, a see-through window, and protects the glass vessel.  Eliminates toxic leaching that plastic can cause.  Innovative design holds 22-1/2 ounces.  Dishwasher safe",
	"category" : "Kitchen",
	"price" : 23
}
{
	"_id" : ObjectId("59498af617b9b7d9e4b97d8d"),
	"name" : "Backpack",
	"description" : "Bag to carry things",
	"category" : "Accessories",
	"price" : 29.99
}
{
	"_id" : ObjectId("59498b4617b9b7d9e4b97d8e"),
	"name" : "T-shirt",
	"description" : "Amazing shirt",
	"category" : "Clothing",
	"price" : 19.99
}
{
	"_id" : ObjectId("59498b9f17b9b7d9e4b97d8f"),
	"name" : "Pants",
	"description" : "Amazing pants",
	"category" : "Clothing",
	"price" : 19.99
}

// PASTE CATEGORY PRODUCTS QUERY HERE

db.products.find({ "category" : "Clothing" }).pretty()
{
	"_id" : ObjectId("59498b4617b9b7d9e4b97d8e"),
	"name" : "T-shirt",
	"description" : "Amazing shirt",
	"category" : "Clothing",
	"price" : 19.99
}
{
	"_id" : ObjectId("59498b9f17b9b7d9e4b97d8f"),
	"name" : "Pants",
	"description" : "Amazing pants",
	"category" : "Clothing",
	"price" : 19.99
}


// PASTE DELETE PRODUCT QUERY HERE

> db.products.deleteOne ( { "name" : "Pants" })
{ "acknowledged" : true, "deletedCount" : 1 }
> db.products.find().pretty()
{
	"_id" : ObjectId("594989b217b9b7d9e4b97d8b"),
	"name" : "Water Bottle",
	"description" : "High quality glass bottle provides a healthier way to drink.  Silicone sleeve provides a good grip, a see-through window, and protects the glass vessel.  Eliminates toxic leaching that plastic can cause.  Innovative design holds 22-1/2 ounces.  Dishwasher safe",
	"category" : "Kitchen",
	"price" : 23
}
{
	"_id" : ObjectId("59498af617b9b7d9e4b97d8d"),
	"name" : "Backpack",
	"description" : "Bag to carry things",
	"category" : "Accessories",
	"price" : 29.99
}
{
	"_id" : ObjectId("59498b4617b9b7d9e4b97d8e"),
	"name" : "T-shirt",
	"description" : "Amazing shirt",
	"category" : "Clothing",
	"price" : 19.99
}

// PASTE REVIEW QUERY HERE
db.products.updateOne (
... ... { "name" : "Water Bottle"},
... ... {$push: {reviews:
... ... {
... "name": "Shannon",
... "comment": "I love this water bottle!",
... "stars": 5,
... "date": "2016-11-10T18:28:09.369Z"
... }
... }})
{ "acknowledged" : true, "matchedCount" : 1, "modifiedCount" : 1 }
> db.products.find().pretty()
{
	"_id" : ObjectId("594989b217b9b7d9e4b97d8b"),
	"name" : "Water Bottle",
	"description" : "High quality glass bottle provides a healthier way to drink.  Silicone sleeve provides a good grip, a see-through window, and protects the glass vessel.  Eliminates toxic leaching that plastic can cause.  Innovative design holds 22-1/2 ounces.  Dishwasher safe",
	"category" : "Kitchen",
	"price" : 23,
	"reviews" : [
		{
			"name" : "Shannon",
			"comment" : "I love this water bottle!",
			"stars" : 5,
			"date" : "2016-11-10T18:28:09.369Z"
		}
	]
}
{
	"_id" : ObjectId("59498af617b9b7d9e4b97d8d"),
	"name" : "Backpack",
	"description" : "Bag to carry things",
	"category" : "Accessories",
	"price" : 29.99
}
{
	"_id" : ObjectId("59498b4617b9b7d9e4b97d8e"),
	"name" : "T-shirt",
	"description" : "Amazing shirt",
	"category" : "Clothing",
	"price" : 19.99
}
