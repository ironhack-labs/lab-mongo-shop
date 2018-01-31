// 1.2 | Insert our first users in users collection
// ------------------------------------------------
db.users.insertOne(
    {"firstName": "John",
    "lastName": "Smith",
    "dateBirth": ISODate("2016-12-10T18:28:09.369Z"),
    "address": {
      "streetAddress": "21 2nd Street",
      "city": "New York",
      "state": "NY",
      "postalCode": "10021"
    }
    })
  








// PASTE 3 USER INSERT QUERIES HERE
db.users.insertOne(
    {"firstName": "Carlos",
    "lastName": "Lorente",
    "dateBirth": ISODate("2016-12-10T18:28:09.369Z"),
    "address": {
      "streetAddress": "26 2nd Street",
      "city": "New York",
      "state": "NY",
      "postalCode": "13721"
    }
    })

    db.users.insertOne(
        {"firstName": "Enrique",
        "lastName": "Hernández",
        "dateBirth": ISODate("2016-12-10T18:28:09.369Z"),
        "address": {
          "streetAddress": "45 2nd Street",
          "city": "New York",
          "state": "NY",
          "postalCode": "13901"
        }
        })













// 1.3 | Insert our first products in products collection
db.products.insertOne(
    {
        "name": "Water Bottle",
        "description":"High quality glass bottle provides a healthier way to drink.  Silicone sleeve provides a good grip, a see-through window, and protects the glass vessel.  Eliminates toxic leaching that plastic can cause.  Innovative design holds 22-1/2 ounces.  Dishwasher safe",
        "category":"Kitchen",
        "price":23.0
     }
)









// ------------------------------------------------------


// PASTE 3 PRODUCT INSERT QUERIES HERE
db.products.insertOne(
    {
        "name": "Red Bull",
        "description":"Te da alas",
        "category":"Kitchen",
        "price":13.0
     }
)

db.products.insertOne(
    {
        "name": "Coca cola",
        "description":"its good",
        "category":"Kitchen",
        "price":33.0
     }
)






















// 1.4 | Getting Started with queries
// ----------------------------------
// PASTE SHOPPING CART QUERY HERE
db.users.find().pretty()
{
	"_id" : ObjectId("5a7082b15b1a329123471610"),
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
		ObjectId("5a708809a59d485fe81b47b3"),
		ObjectId("5a708809a59d485fe81b47b4")
	]
}
{
	"_id" : ObjectId("5a7083f85b1a329123471611"),
	"firstName" : "Carlos",
	"lastName" : "Lorente",
	"dateBirth" : ISODate("2016-12-10T18:28:09.369Z"),
	"address" : {
		"streetAddress" : "31 1st Street",
		"city" : "Miami",
		"state" : "Mi",
		"postalCode" : "18921"
	},
	"shoppingCart" : [
		ObjectId("5a708809a59d485fe81b47b4"),
		ObjectId("5a708809a59d485fe81b47b3")
	]
}
{
	"_id" : ObjectId("5a7084415b1a329123471612"),
	"firstName" : "Enrique",
	"lastName" : "Hernández",
	"dateBirth" : ISODate("2016-12-10T18:28:09.369Z"),
	"address" : {
		"streetAddress" : "11 3rd Street",
		"city" : "Madrid",
		"state" : "Mad",
		"postalCode" : "23921"
	},
	"shoppingCart" : [
		ObjectId("5a708809a59d485fe81b47b3"),
		ObjectId("5a708809a59d485fe81b47b4")
	]
}



// PASTE LIST PRODUCTS QUERY HERE
db.products.find().pretty()

{
	"_id" : ObjectId("5a7087c9a59d485fe81b47b3"),
	"name" : "Water Bottle",
	"description" : "High quality glass bottle provides a healthier way to drink.  Silicone sleeve provides a good grip, a see-through window, and protects the glass vessel.  Eliminates toxic leaching that plastic can cause.  Innovative design holds 22-1/2 ounces.  Dishwasher safe",
	"category" : "Kitchen",
	"price" : 23
}
{
	"_id" : ObjectId("5a708809a59d485fe81b47b4"),
	"name" : "Red Bull",
	"description" : "Te da alas",
	"category" : "Kitchen",
	"price" : 13
}



// PASTE CATEGORY PRODUCTS QUERY HERE
db.products.find({"category":"Kitchen"}).pretty()

// PASTE DELETE PRODUCT QUERY HERE
db.products.deleteOne({ "_id": ObjectId("5a708809a59d485fe81b47b4"})

// PASTE REVIEW QUERY HERE
db.products.insertOne({ "category": "Kitchen" },{"reviews": [
    {
      "name": "Shannon",
      "comment": "This is so warm and comfortable.",
      "stars": 2,
      "date": "2016-11-10T18:28:09.369Z"
    }
  ]

})

