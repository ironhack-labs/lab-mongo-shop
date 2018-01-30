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

db.users.updateOne(
  {
    "name": 'Carlos'
  }
  {
    $set: {
      'shoppingCart': { 
        "name": "Water Bottle",
        "description":"High quality glass bottle provides a healthier way to drink.  Silicone sleeve provides a good grip, a see-through window, and protects the glass vessel.  Eliminates toxic leaching that plastic can cause.  Innovative design holds 22-1/2 ounces.  Dishwasher safe",
        "category":"Kitchen",
        "price":23.0
     }
    }
  }
);

db.products.find({}).pretty();
db.products.find({"categorie": "Kitchen"}).pretty();
db.products.deleteOne('name': 'Water Bottle');
db.products.update({'name': 'Water Bottle'}
{
  "reviews": [
    {
      "name": "Shannon",
      "comment": "This is so warm and comfortable.",
      "stars": 2,
      "date": "2016-11-10T18:28:09.369Z"
    }
  ]
});
// PASTE LIST PRODUCTS QUERY HERE


// PASTE CATEGORY PRODUCTS QUERY HERE


// PASTE DELETE PRODUCT QUERY HERE


// PASTE REVIEW QUERY HERE

