// 1.2 | Insert our first users in users collection
// ------------------------------------------------
// PASTE 3 USER INSERT QUERIES HERE
db.users.insertOne({
	"firstName": "John",
	"lastName": "Smith",
	"dateBirth": ISODate("2016-12-10T18:28:09.369Z"),
	"address": {
	 "streetAddress": "21 2nd Street",
	 "city": "New York",
	 "state": "NY",
	 "postalCode": "10021"
	},
	"shoppingCart": []
})

// 1.3 | Insert our first products in products collection
// ------------------------------------------------------
// PASTE 3 PRODUCT INSERT QUERIES HERE
db.products.insertOne({ 
  "name": "Water Bottle",
  "description":"High quality glass bottle provides a healthier way to drink.  Silicone sleeve provides a good grip, a see-through window, and protects the glass vessel.  Eliminates toxic leaching that plastic can cause.  Innovative design holds 22-1/2 ounces.  Dishwasher safe",
  "category":"Kitchen",
  "price":23.0
})
db.products.insertMany(
[{ 
  "name": "Fanta Bottle",
  "description":"High quality glass bottle provides a healthier way to drink.  Silicone sleeve provides a good grip, a see-through window, and protects the glass vessel.  Eliminates toxic leaching that plastic can cause.  Innovative design holds 22-1/2 ounces.  Dishwasher safe",
  "category":"Kitchen",
  "price":43.0
},
{ 
  "name": "Computer",
  "description":"High quality glass bottle provides a healthier way to drink.  Silicone sleeve provides a good grip, a see-through window, and protects the glass vessel.  Eliminates toxic leaching that plastic can cause.  Innovative design holds 22-1/2 ounces.  Dishwasher safe",
  "category":"Electronic",
  "price":230.0
}]
)
// 1.4 | Getting Started with queries
// ----------------------------------
// PASTE SHOPPING CART QUERY HERE
db.users.update({_id: ObjectId("5a70856f611361e7416b2e12")}, {$push: { shoppingCart: { $each: [ObjectId("5a7086a4519f3eff11883cc2"),ObjectId("5a7087d5519f3eff11883cc3"),ObjectId("5a7087d5519f3eff11883cc4")]}}})

// PASTE LIST PRODUCTS QUERY HERE
db.products.find()

// PASTE CATEGORY PRODUCTS QUERY HERE
db.products.find({category: "Kitchen"})

// PASTE DELETE PRODUCT QUERY HERE
db.products.deleteOne({category: "Electronic"})

// PASTE REVIEW QUERY HERE
db.products.update({_id: ObjectId("5a7087d5519f3eff11883cc3")}, {$set: {"reviews": [ { "name": "Shannon","comment": "This is so warm and comfortable.",
"stars": 3,
"date": "2016-11-10T18:28:09.369Z"
}]}})