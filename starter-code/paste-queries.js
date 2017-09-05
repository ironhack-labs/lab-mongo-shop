// 1.2 | Insert our first users in users collection
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
// ------------------------------------------------
// PASTE 3 USER INSERT QUERIES HERE
db.users.insertMany([{
  "_id" : ObjectId("59aeaeb0e1d22d4e41782f91"),
  "firstName" : "Carlos",
  "lastName" : "Cabezas",
  "dateBirth" : ISODate("2013-12-10T18:28:09.369Z"),
  "address" : {
          "streetAddress" : "21 3nd Street",
          "city" : "Los Angeles",
          "state" : "NY",
          "postalCode" : "10024"
  },
  "shoppingCart" : [ ]
},
{
  "_id" : ObjectId("59aeaf01e1d22d4e41782f92"),
  "firstName" : "Miriam",
  "lastName" : "Valero",
  "dateBirth" : ISODate("2010-12-10T18:28:09.369Z"),
  "address" : {
          "streetAddress" : "21 5nd Street",
          "city" : "Miami",
          "state" : "NY",
          "postalCode" : "10027"
  },
  "shoppingCart" : [ ]
}])

// 1.3 | Insert our first products in products collection
db.products.insertOne({
  "name": "Water Bottle",
  "description":"High quality glass bottle provides a healthier way to drink.  Silicone sleeve provides a good grip, a see-through window, and protects the glass vessel.  Eliminates toxic leaching that plastic can cause.  Innovative design holds 22-1/2 ounces.  Dishwasher safe",
  "category":"Kitchen",
  "price":23.0
})
// ------------------------------------------------------
// PASTE 3 PRODUCT INSERT QUERIES HERE
db.products.insertMany([{ 
  "name": "Water Bottle",
  "description":"High quality glass bottle provides a healthier way to drink.  Silicone sleeve provides a good grip, a see-through window, and protects the glass vessel.  Eliminates toxic leaching that plastic can cause.  Innovative design holds 22-1/2 ounces.  Dishwasher safe",
  "category":"Kitchen",
  "price":23.0
},
{
  "name": "WiredTiger T-shirt",
  "description":"Crafted from ultra-soft combed cotton, this essential t-shirt features sporty contrast tipping and MongoDB's signature leaf.",
  "category":"Apparel",
  "reviews": [
   {
     "name": "Shannon",
     "comment": "This is so warm and comfortable.",
     "stars": 2,
     "date": "2016-11-10T18:28:09.369Z"
   },
   {
     "name": "Shannon",
     "comment": "This is so warm and comfortable.",
     "stars": 3,
     "date": "2016-11-10T18:28:09.369Z"
   }
  ],
  "price":12.0
}])

// 1.4 | Getting Started with queries
// ----------------------------------
// PASTE SHOPPING CART QUERY HERE
db.users.updateOne({"firstName":"Miriam"}, {$push:{
  "shoppingCart": ObjectId("59aeb0f5e1d22d4e41782f95"), 
  "shoppingCart": ObjectId("59aeb0bee1d22d4e41782f94")
}})
// PASTE LIST PRODUCTS QUERY HERE
db.users.find({firstName:"Miriam"},{shoppingCart:1})

// PASTE CATEGORY PRODUCTS QUERY HERE
db.products.find({
  "_id": ObjectId("59aeb0f5e1d22d4e41782f95"), 
  "_id": ObjectId("59aeb0bee1d22d4e41782f94")
  },
  {"category": "Kitchen"}
)

// PASTE DELETE PRODUCT QUERY HERE
db.products.deleteOne({"_id": ObjectId("59aeb0f5e1d22d4e41782f95")})

// PASTE REVIEW QUERY HERE
db.products.updateOne({"_id": ObjectId("59aeb0f5e1d22d4e41782f95")}, {$push:{
  "name": "Shannon",
  "comment": "This is so warm and comfortable.",
  "stars": 2,
  "date": "2016-11-10T18:28:09.369Z"
}})
