// 1.2 | Insert our first users in users collection
// ------------------------------------------------
// PASTE 3 USER INSERT QUERIES HERE
db.users.insertOne({"firstName": "Patrick", "lastName": "Joerg", "dateBirth": ISODate("1986-11-19T18:28:09.369Z"), "address": {"streetAddress": "NY Street", "city": "CDMX", "state": "MX", "postalCode": "03030"}});
db.users.insertOne({"firstName": "Lance", "lastName": "Meier", "dateBirth": ISODate("1984-12-06T18:28:09.369Z"), "address": {"streetAddress": "Monro", "city": "MPLS", "state": "MN", "postalCode": "55413"}});
db.users.insertOne({"firstName": "Patrick", "lastName": "Joerg", "dateBirth": ISODate("1986-11-19T18:28:09.369Z"), "address": {"streetAddress": "NY Street", "city": "CDMX", "state": "MX", "postalCode": "03030"}});

// 1.3 | Insert our first products in products collection
// ------------------------------------------------------
// PASTE 3 PRODUCT INSERT QUERIES HERE
db.products.insertOne({"name": "Table Cloth", "description":"High quality table ware", "category":"table ware", "price":5.00});
db.products.insertOne({"name": "T-shirt", "description":"High quality t-shirt", "category":"clothes", "price":15.00});
db.products.insertOne({"name": "Machete 3000", "description":"High quality machete", "category":"garden tools", "price":10.00});

// 1.4 | Getting Started with queries
// ----------------------------------
// PASTE SHOPPING CART QUERY HERE
db.users.updateOne({firstName: "Patrick"}, {$set: {"shoppingCart": [{"product": "Machete"},{"product": "T-shirt"}]}});
// PASTE LIST PRODUCTS QUERY HERE
db.products.find().pretty();
{
	"_id" : ObjectId("5a8328a82628ee417a4982c7"),
	"name" : "Water Bottle",
	"description" : "High quality glass bottle provides a healthier way to drink.  Silicone sleeve provides a good grip, a see-through window, and protects the glass vessel.  Eliminates toxic leaching that plastic can cause.  Innovative design holds 22-1/2 ounces.  Dishwasher safe",
	"category" : "Kitchen",
	"price" : 23
}
{
	"_id" : ObjectId("5a832c1a2628ee417a4982cc"),
	"name" : "T-shirt",
	"description" : "High quality t-shirt",
	"category" : "clothes",
	"price" : 15
}
{
	"_id" : ObjectId("5a832c6e2628ee417a4982cd"),
	"name" : "Machete 3000",
	"description" : "High quality machete",
	"category" : "garden tools",
	"price" : 10,
	"reviews" : [
		{
			"name" : "Shannon",
			"comment" : "The world's best machete",
			"stars" : 10,
			"date" : "2016-11-10T18:28:09.369Z"
		}
	]
}

// PASTE CATEGORY PRODUCTS QUERY HERE


// PASTE DELETE PRODUCT QUERY HERE
db.products.deleteOne({name: "Table Cloth"});

// PASTE REVIEW QUERY HERE


