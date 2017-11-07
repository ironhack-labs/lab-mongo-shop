// 1.1 | Create database name
use ironshop



// 1.2 | Insert our first users in users collection
// ------------------------------------------------
// Add Collection and Users
db.users.insertOne({
  "firstName": "John",
  "lastName": "Smith",
  "dateBirth": ISODate("2016-12-10T18:28:09.369Z"),
  "address": {
    "streetAddress": "21 2nd Street",
    "city": "New York",
    "state": "NY",
    "postalCode": "10021"
  }
})
db.users.insertOne({
  "firstName": "Ian",
  "lastName": "Izaguirre",
  "dateBirth": ISODate("2016-12-10T18:28:09.369Z"),
  "address": {
    "streetAddress": "5467",
    "city": "Miami",
    "state": "Fl",
    "postalCode": "33148"
  }
})
db.users.insertOne({
  "firstName": "Robert",
  "lastName": "Rapid",
  "dateBirth": ISODate("2016-12-10T18:28:09.369Z"),
  "address": {
    "streetAddress": "2467",
    "city": "Miami",
    "state": "Fl",
    "postalCode": "3245"
  }
})



// PASTE 3 USER INSERT QUERIES HERE


// 1.3 | Insert our first products in products collection
// ------------------------------------------------------
// PASTE 3 PRODUCT INSERT QUERIES HERE



db.products.insertOne({   
	"name": "Water Bottle", //ObjectId("5a020cd8ad5c4c11518874be")
    "description":"High quality glass bottle provides a healthier way to drink.  Silicone sleeve provides a good grip, a see-through window, and protects the glass vessel.  Eliminates toxic leaching that plastic can cause.  Innovative design holds 22-1/2 ounces.  Dishwasher safe",
    "category":"Kitchen",
    "price":23.0
 })
db.products.insertOne({   
	"name": "Juice", // ObjectId("5a020ed2ad5c4c11518874bf")
    "description":"High quality juice",
    "category":"Kitchen",
    "price":8.0
 })
db.products.insertOne({   
	"name": "Eraser", // ObjectId("5a020edbad5c4c11518874c0")
    "description":"High quality Eraser",
    "category":"School",
    "price":1.0
 })


// 1.4 | Getting Started with queries
// ----------------------------------
// PASTE SHOPPING CART QUERY HERE
// Create a purchase with some products for the user.

db.users.updateOne(
	{"firstName": "John"},
	{
		$set:{"shoppingCart": [ObjectId("5a020cd8ad5c4c11518874be")] }
	}
)
db.users.updateOne(
	{"firstName": "Ian"},
	{
		$set:{"shoppingCart": [ObjectId("5a020cd8ad5c4c11518874be"), ObjectId("5a020ed2ad5c4c11518874bf")] }
	}
)
db.users.updateOne(
	{"firstName": "Robert"},
	{
		$set:{"shoppingCart": [ObjectId("5a020edbad5c4c11518874c0")] }
	}
)
// Push Test
db.users.updateOne(
	{"firstName": "Robert"},
	{
		$push:{"shoppingCart": [ObjectId("5a020edbad5c4c11518874c0"),ObjectId("5a020cd8ad5c4c11518874be"), ObjectId("5a020ed2ad5c4c11518874bf")] }
	}
)


// List all products with the same category 

db.products.find({"category":"Kitchen"}).pretty()

// delete a product 
db.products.deleteOne({"name": "Juice"})

// PASTE LIST PRODUCTS QUERY HERE


// PASTE CATEGORY PRODUCTS QUERY HERE


// PASTE DELETE PRODUCT QUERY HERE


// PASTE REVIEW QUERY HERE

