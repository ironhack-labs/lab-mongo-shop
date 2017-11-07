// 1.2 | Insert our first users in users collection
// ------------------------------------------------
database.collection("users").insertOne(user, callback);
database.collection("users").deleteOne({firstName: userName}, callback);

// 1.3 | Insert our first products in products collection
// ------------------------------------------------------
database.collection("products").insertOne(product, callback);


// 1.4 | Getting Started with queries
// ----------------------------------
// PASTE SHOPPING CART QUERY HERE
database.collection("users").updateOne({"firstName":userFirstName},{$set: {"shoppingCart":productName}},callback);


// PASTE LIST PRODUCTS QUERY HERE
database.collection(products).find({}).toArray(callback);



// PASTE DELETE PRODUCT QUERY HERE
database.collection("products").deleteOne({"productName": productName}, callback);


// PASTE REVIEW QUERY HERE
database.collection("products").updateOne({"productName":productName},{$set: {"review":review}},callback);
