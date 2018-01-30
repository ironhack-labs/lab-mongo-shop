// 1.2 | Insert our first users in users collection
// ------------------------------------------------
// PASTE 3 USER INSERT QUERIES HERE

mongoimport --db myShop --collection users --file /Users/lucasmartin/Desktop/lab-mongo-shop/starter-code/data/users.json
db.users.insertOne(/Users/lucasmartin/Desktop/lab-mongo-shop/starter-code/data/users.json)

// 1.3 | Insert our first products in products collection
// ------------------------------------------------------
// PASTE 3 PRODUCT INSERT QUERIES HERE

mongoimport --db myShop --collection products --file /Users/lucasmartin/Desktop/lab-mongo-shop/starter-code/data/products.json
db.products.insertOne(/Users/lucasmartin/Desktop/lab-mongo-shop/starter-code/data/products.json)

// 1.4 | Getting Started with queries
// ----------------------------------
// PASTE SHOPPING CART QUERY HERE


// PASTE LIST PRODUCTS QUERY HERE


// PASTE CATEGORY PRODUCTS QUERY HERE


// PASTE DELETE PRODUCT QUERY HERE


// PASTE REVIEW QUERY HERE

