// 1.2 | Insert our first users in users collection
//  db.users.insertOne({
//    "firstName": "John",
//    "lastName": "Smith",
//    "dateBirth": ISODate("2016-12-10T18:28:09.369Z"),
//    "address": {
//      "streetAddress": "21 2nd Street",
//      "city": "New York",
//      "state": "NY",
//      "postalCode": "10021"
//     }
//   })
//  {
// 	"acknowledged" : true,
// 	"insertedId" : ObjectId("5a707f2fec834cb75c000184")
// }

// PASTE 3 USER INSERT QUERIES HERE


// // 1.3 | Insert our first products in products collection
//  db.products.insertOne({
//     "name": "Water Bottle",
//     "description":"High quality glass bottle provides a healthier way to drink.  Silicone sleeve provides a good grip, a see-through window, and protects the glass vessel.  Eliminates toxic leaching that plastic can cause.  Innovative design holds 22-1/2 ounces.  Dishwasher safe",
//     "category":"Kitchen",
//     "price":23.0
//  })
// {
// 	"acknowledged" : true,
// 	"insertedId" : ObjectId("5a707f9cec834cb75c000185")
// }

// PASTE 3 PRODUCT INSERT QUERIES HERE
//  db.products.insertMany([{ 
//     "name": "Water Bottle",
//     "description":"High quality glass bottle provides a healthier way to drink.  Silicone sleeve provides a good grip, a see-through window, and protects the glass vessel.  Eliminates toxic leaching that plastic can cause.  Innovative design holds 22-1/2 ounces.  Dishwasher safe",
//     "category":"Kitchen",
//     "price":23.0
//  },
//  {
//     "name": "WiredTiger T-shirt",
//     "description":"Crafted from ultra-soft combed cotton, this essential t-shirt features sporty contrast tipping and MongoDB's signature leaf.",
//     "category":"Apparel",
//     "reviews": [
//      {
//        "name": "Shannon",
//        "comment": "This is so warm and comfortable.",
//        "stars": 2,
//        "date": "2016-11-10T18:28:09.369Z"
//      },
//      {
//        "name": "Shannon",
//        "comment": "This is so warm and comfortable.",
//        "stars": 3,
//        "date": "2016-11-10T18:28:09.369Z"
//      }
//     ],
//     "price":12.0
//  }])
// {
// 	"acknowledged" : true,
// 	"insertedIds" : [
// 		ObjectId("5a708008ec834cb75c000186"),
// 		ObjectId("5a708008ec834cb75c000187")
// 	]
// }


// 1.4 | Getting Started with queries

// PASTE SHOPPING CART QUERY HERE
//  db.users.insertOne({
//  "firstName": "John",
//  "lastName": "Smith",
//  "dateBirth": ISODate("2016-12-10T18:28:09.369Z"),
//  "address": {
//   "streetAddress": "21 2nd Street",
//   "city": "New York",
//   "state": "NY",
//   "postalCode": "10021"
//  },
//  "shoppingCart": []
//  })
// {
// 	"acknowledged" : true,
// 	"insertedId" : ObjectId("5a7087c8ccfeb081a954060b")
// }


// PASTE LIST PRODUCTS QUERY HERE
// db.products.find()
// { "_id" : ObjectId("5a707f9cec834cb75c000185"), "name" : "Water Bottle", "description" : "High quality glass bottle provides a healthier way to drink.  Silicone sleeve provides a good grip, a see-through window, and protects the glass vessel.  Eliminates toxic leaching that plastic can cause.  Innovative design holds 22-1/2 ounces.  Dishwasher safe", "category" : "Kitchen", "price" : 23 }
// { "_id" : ObjectId("5a708008ec834cb75c000186"), "name" : "Water Bottle", "description" : "High quality glass bottle provides a healthier way to drink.  Silicone sleeve provides a good grip, a see-through window, and protects the glass vessel.  Eliminates toxic leaching that plastic can cause.  Innovative design holds 22-1/2 ounces.  Dishwasher safe", "category" : "Kitchen", "price" : 23 }
// { "_id" : ObjectId("5a708008ec834cb75c000187"), "name" : "WiredTiger T-shirt", "description" : "Crafted from ultra-soft combed cotton, this essential t-shirt features sporty contrast tipping and MongoDB's signature leaf.", "category" : "Apparel", "reviews" : [ { "name" : "Shannon", "comment" : "This is so warm and comfortable.", "stars" : 2, "date" : "2016-11-10T18:28:09.369Z" }, { "name" : "Shannon", "comment" : "This is so warm and comfortable.", "stars" : 3, "date" : "2016-11-10T18:28:09.369Z" } ], "price" : 12 }


// PASTE CATEGORY PRODUCTS QUERY HERE
//  db.products.find({"category":"Kitchen"})
// { "_id" : ObjectId("5a707f9cec834cb75c000185"), "name" : "Water Bottle", "description" : "High quality glass bottle provides a healthier way to drink.  Silicone sleeve provides a good grip, a see-through window, and protects the glass vessel.  Eliminates toxic leaching that plastic can cause.  Innovative design holds 22-1/2 ounces.  Dishwasher safe", "category" : "Kitchen", "price" : 23 }
// { "_id" : ObjectId("5a708008ec834cb75c000186"), "name" : "Water Bottle", "description" : "High quality glass bottle provides a healthier way to drink.  Silicone sleeve provides a good grip, a see-through window, and protects the glass vessel.  Eliminates toxic leaching that plastic can cause.  Innovative design holds 22-1/2 ounces.  Dishwasher safe", "category" : "Kitchen", "price" : 23 }
 


// PASTE DELETE PRODUCT QUERY HERE
//  db.products.remove({ 
//     "name": "Water Bottle",
//     "description":"High quality glass bottle provides a healthier way to drink.  Silicone sleeve provides a good grip, a see-through window, and protects the glass vessel.  Eliminates toxic leaching that plastic can cause.  Innovative design holds 22-1/2 ounces.  Dishwasher safe",
//     "category":"Kitchen",
//     "price":23.0
//  })
// WriteResult({ "nRemoved" : 2 })
  

// PASTE REVIEW QUERY HERE
//  db.products.update({_id:'5a708008ec834cb75c000187'},{$push:{"reviews":"a"}})
// WriteResult({ "nMatched" : 1, "nUpserted" : 0, "nModified" : 1 })

