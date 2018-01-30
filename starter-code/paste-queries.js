// 1.2 | Insert our first users in users collection


// db.users.insertOne({   "firstName": "John",   "lastName": "Smith",   "dateBirth": ISODate("2016-12-10T18:28:09.369Z"),  
// "address": {     "streetAddress": "21 2nd Street",     "city": "New York",     "state": "NY",     "postalCode": "10021"   } })


// PASTE 3 USER INSERT QUERIES HERE

// db.users.insertOne({   "firstName": "Mark",   "lastName": "Boyander",   "dateBirth": ISODate("2016-12-10T18:28:09.369Z"),   "address": {     "streetAddress": "21 2nd Street",     
//"city": "Ibiza",     "state": "España",     "postalCode": "30140"   } })

// db.users.insertOne({   "firstName": "Manuel ",   "lastName": "Del Pino",   "dateBirth": ISODate("2016-12-10T18:28:09.369Z"),   "address": {     "streetAddress": "21 2nd Street",     
//"city": "Malaga",     "state": "Andalucia",     "postalCode": "10021"   } })

// db.users.insertOne({   "firstName": "Manuel",   "lastName": "Avello",   "dateBirth": ISODate("2016-12-10T18:28:09.369Z"),  
// "address": {     "streetAddress": "21 2nd Street",     "city": "desconocido",     "state": "desconocido",     "postalCode": "10021"   } })


// 1.3 | Insert our first products in products collection
// {
//    "name": "Water Bottle",
//    "description":"High quality glass bottle provides a healthier way to drink.  Silicone sleeve provides a good grip, a see-through window, and protects the glass vessel.  Eliminates toxic leaching that plastic can cause.  Innovative design holds 22-1/2 ounces.  Dishwasher safe",
//    "category":"Kitchen",
//    "price":23.0
// }

// PASTE 3 PRODUCT INSERT QUERIES HERE

// {
//    "name": "Marco de Puerta",
//    "description":"High quality glass bottle provides a healthier way to drink.  Silicone sleeve provides a good grip, a see-through window, and protects the glass vessel.  Eliminates toxic leaching that plastic can cause.  Innovative design holds 22-1/2 ounces.  Dishwasher safe",
//    "category":"Beedrom",
//    "price":44.0
// }


// {
//    "name": "Silicona",
//    "description":"High quality glass bottle provides a healthier way to drink.  Silicone sleeve provides a good grip, a see-through window, and protects the glass vessel.  Eliminates toxic leaching that plastic can cause.  Innovative design holds 22-1/2 ounces.  Dishwasher safe",
//    "category":"AllSites",
//    "price":37.0
// }
// {
//    "name": "Escoba",
//    "description":"High quality glass bottle provides a healthier way to drink.  Silicone sleeve provides a good grip, a see-through window, and protects the glass vessel.  Eliminates toxic leaching that plastic can cause.  Innovative design holds 22-1/2 ounces.  Dishwasher safe",
//    "category":"AllSites",
//    "price":12.0
// }



// 1.4 | Getting Started with queries
// ----------------------------------
// PASTE SHOPPING CART QUERY HERE

//db.users.updateMany({"_id" : ObjectId("5a709e801a5ac8be637daff3")},{$set: {"shoppingCart": [ObjectId("5a7086486aad552c1cfdeb36")] }})


// PASTE LIST PRODUCTS QUERY HERE

//db.products.find().pretty()


// PASTE CATEGORY PRODUCTS QUERY HERE

//db.products.find({"category":"Kitchen"}).pretty()


// PASTE DELETE PRODUCT QUERY HERE

//db.products.deleteOne( {"_id" : ObjectId("5a708a706aad552c1cfdeb38")})


// PASTE REVIEW QUERY HERE

//db.products.updateMany({"_id" : ObjectId("5a7086486aad552c1cfdeb36")},{$set: {"reviews": [{"name": "Shannon","comment": "This is so warm and comfortable."}]}})

