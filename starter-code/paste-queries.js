// 1.2 | Insert our first users in users collection

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
	"insertedId" : ObjectId("59a5d43773dd36c93a0b529c")
}

db.users.insertOne(
... {
...   "firstName": "Jamillet",
...   "lastName": "Zelaya",
...   "dateBirth": ISODate("1991-06-24T18:28:09.369Z"),
...   "address": {
...     "streetAddress": "123 4th Street",
...     "city": "Miami",
...     "state": "FL",
...     "postalCode": "12345"
...   }
... }
... )
{
	"acknowledged" : true,
	"insertedId" : ObjectId("59a5d56373dd36c93a0b529d")
}

db.users.insertOne(
... {
...   "firstName": "Joao",
...   "lastName": "Campos",
...   "dateBirth": ISODate("1989-09-10T18:28:09.369Z"),
...   "address": {
...     "streetAddress": "345 5th Street",
...     "city": "Miami",
...     "state": "FL",
...     "postalCode": "54321"
...   }
... }
... )
{
	"acknowledged" : true,
	"insertedId" : ObjectId("59a5d5c273dd36c93a0b529e")
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
	"insertedId" : ObjectId("59a5d65a73dd36c93a0b529f")
}

db.products.insertOne(
... {
...    "name": "Tennis Shoes",
...    "description":"High quality tennis shoes provides a healthier way to run. And relieves foot pain.",
...    "category":"Sports",
...    "price":50.0
... }
... )
{
	"acknowledged" : true,
  "insertedId" : ObjectId("59a5d65a73dd36c93a0b529f")
}

db.products.insertOne(
... {
...    "name": "Tooth Paste",
...    "description":"High quality tooth paste provides healthier gums and teeth.",
...    "category":"Hygeine",
...    "price":3.99
... }
... )
{
	"acknowledged" : true,
  "insertedId" : ObjectId("59a5d65a73dd36c93a0b529f")
}


// 1.4 | Getting Started with queries
// ----------------------------------
// PASTE SHOPPING CART QUERY HERE

db.users.updateOne(
... { "firstName" : "John" },
... { $push: {"shoppingCart" : ObjectId("59a5d65a73dd36c93a0b529f")} }
... )
{ "acknowledged" : true, "matchedCount" : 1, "modifiedCount" : 1 }


// PASTE LIST PRODUCTS QUERY HERE
db.products.find().pretty()
{
	"_id" : ObjectId("59a5d65a73dd36c93a0b529f"),
	"name" : "Water Bottle",
	"description" : "High quality glass bottle provides a healthier way to drink.  Silicone sleeve provides a good grip, a see-through window, and protects the glass vessel.  Eliminates toxic leaching that plastic can cause.  Innovative design holds 22-1/2 ounces.  Dishwasher safe",
	"category" : "Kitchen",
	"price" : 23
}
{
	"_id" : ObjectId("59a5d75a73dd36c93a0b52a0"),
	"name" : "Tennis Shoes",
	"description" : "High quality tennis shoes provides a healthier way to run. And relieves foot pain.",
	"category" : "Sports",
	"price" : 50
}
{
	"_id" : ObjectId("59a5d7ca73dd36c93a0b52a1"),
	"name" : "Tooth Paste",
	"description" : "High quality tooth paste provides healthier gums and teeth.",
	"category" : "Hygeine",
	"price" : 3.99
}


// PASTE CATEGORY PRODUCTS QUERY HERE

db.products.find(
... ... { category: "Sports" }
... ... ).pretty()
{
	"_id" : ObjectId("59a5d75a73dd36c93a0b52a0"),
	"name" : "Tennis Shoes",
	"description" : "High quality tennis shoes provides a healthier way to run. And relieves foot pain.",
	"category" : "Sports",
	"price" : 50
}


// PASTE DELETE PRODUCT QUERY HERE

db.products.deleteOne(
... { name: "Water Bottle" }
... )
{ "acknowledged" : true, "deletedCount" : 1 }


// PASTE REVIEW QUERY HERE

db.products.updateOne(
... { name: "Tennis Shoes"},
... { $set: { "reviews": [
...     {
...       "name": "Shannon",
...       "comment": "This is so warm and comfortable.",
...       "stars": 2,
...       "date": "2016-11-10T18:28:09.369Z"
...     }
...   ] } } )
{ "acknowledged" : true, "matchedCount" : 1, "modifiedCount" : 1 }
