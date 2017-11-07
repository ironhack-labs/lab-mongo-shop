// 1.2 | Insert our first users in users collection
// ------------------------------------------------
// PASTE 3 USER INSERT QUERIES HERE
// > db.users.find().pretty()
// {
// 	"_id" : ObjectId("5a019b278b89d4a5948335d2"),
// 	" firstName " : " John ",
// 	" lastName " : " Smith ",
// 	" dateBirth " : ISODate("2016-12-10T18:00:00Z"),
// 	" dirección " : {
// 		" streetAddress " : " 21 2nd Street ",
// 		" ciudad " : " Nueva York ",
// 		" estado " : " NY ",
// 		" código postal " : " 10021 "
// 	}
// }
// {
// 	"_id" : ObjectId("5a019d5f8b89d4a5948335d4"),
// 	"firstName" : "Yurema",
// 	"lastName" : "Rebollo",
// 	"dateBirth" : "17-11-1987",
// 	"address" : "Madrid"
// }
// {
// 	"_id" : ObjectId("5a019dfc8b89d4a5948335d5"),
// 	"firstName" : "Maria",
// 	"lastName" : "Ruiz",
// 	"dateBirth" : "08-11-87",
// 	"address" : "Madrid"
// }

// 1.3 | Insert our first products in products collection
// ------------------------------------------------------


// PASTE 3 PRODUCT INSERT QUERIES HERE


// 1.4 | Getting Started with queries
// ----------------------------------


// PASTE SHOPPING CART QUERY HERE
// > db.users.updateOne({"firstName": "Maria"},{$push:{"shoppingCart":  { $each: [ObjectId("5a019ea78b89d4a5948335d6"),ObjectId("5a019f6c8b89d4a5948335d7")]}}})
// { "acknowledged" : true, "matchedCount" : 1, "modifiedCount" : 1 }
// >

// PASTE LIST PRODUCTS QUERY HERE


// PASTE CATEGORY PRODUCTS QUERY HERE


// PASTE DELETE PRODUCT QUERY HERE


// PASTE REVIEW QUERY HERE
