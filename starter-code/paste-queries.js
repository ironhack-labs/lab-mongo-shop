// 1.2 | Insert our first users in users collection
// ------------------------------------------------
// PASTE 3 USER INSERT QUERIES HERE
db.users.insertOne({ "firstName": "Kiki", "lastName": "Navarro", "dateBirth" : ISODate("1989-07-25T12: 00: 00.000Z"), "address" : { "streetAddress": "7381 SW 34 STREET ROAD", "city" : "Miami", "state" : "FL", "postalCode": "33155" } })
db.users.insertOne({ "firstName": "Nick", "lastName": "Navarro", "dateBirth" : ISODate("1990-08-02T12: 00: 00.000Z"), "address" : { "streetAddress": "7381 SW 34 STREET ROAD", "city" : "Miami", "state" : "FL", "postalCode": "33155" } })
db.users.insertOne({ "firstName": "Andrew", "lastName": "Areces", "dateBirth" : ISODate("1989-01-07T12: 00: 00.000Z"), "address" : { "streetAddress": "8601 SW 104 STREET", "city" : "Miami", "state" : "FL", "postalCode": "33156" } })

// 1.3 | Insert our first products in products collection
// ------------------------------------------------------
// PASTE 3 PRODUCT INSERT QUERIES HERE
db.products.insertOne({ "name" : "FSU Hat", "description" : "2013 National Championship Ediiton Snap Back Hat", "category" : "Memorabilia", "price" : 35.00, } )
db.products.insertOne({ "name" : "Marlins Baseball", "description" : "1997 World Series Championship MLB Baseball", "category" : "Memorabilia", "price" : 8.00, } )
db.products.insertOne({ "name" : "FSU Football", "description" : "Mini Nike FSU Football", "category" : "Memorabilia", "price" : 12.00, } )

// 1.4 | Getting Started with queries
// ----------------------------------
// PASTE SHOPPING CART QUERY HERE
db.users.updateOne( {"firstName": "Nick"}, { $set: {"shoppingCart": [     ObjectId("59a2ee0ecba0844d07f49d48"),     ObjectId("59a3ee97cba0844d07f49d49")   ]}} )

// PASTE LIST PRODUCTS QUERY HERE
db.products.find().pretty()

// PASTE CATEGORY PRODUCTS QUERY HERE
db.products.find({"category": "Memorabilia"})


// PASTE DELETE PRODUCT QUERY HERE
db.products.deleteOne({"name" : "Water Bottle"})

// PASTE REVIEW QUERY HERE
db.products.updateOne({"name" : "FSU Hat"}, {$set: {"reviews": [{"name": "Shannon", "comment": "This is an awesome hat.","stars": 5, "date": "2016-11-10T18 :28: 09.369Z"}]}})
