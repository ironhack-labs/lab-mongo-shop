// 1.2 | Insert our first users in users collection
mongoimport--db myShop--collection users--file users.json

// PASTE 3 USER INSERT QUERIES HERE


// 1.3 | Insert our first products in products collection
mongoimport--db myShop--collection products--file products.json
// PASTE 3 PRODUCT INSERT QUERIES HERE


// 1.4 | Getting Started with queries
db.users.update({
  "_id": ObjectId("5a01b50a656a29ec4168b0c1")
}, {
  "shoppingCart": "[Water, Ace Laptop]"
})
// PASTE SHOPPING CART QUERY HERE


// PASTE LIST PRODUCTS QUERY HERE
db.products.find().pretty()

// PASTE CATEGORY PRODUCTS QUERY HERE
db.products.find({
  "category": "Sports"
}).pretty()

// PASTE DELETE PRODUCT QUERY HERE
db.products.deleteOne({
  "_id": ObjectId("5a01c09fb167b48d2ec550c9")
})

// PASTE REVIEW QUERY HERE
db.products.updateOne({
      "_id": ObjectId("5a01c0b2b167b48d2ec550d2"
      },
      {
        $set: {
          "reviews": "[{ "
          name ":"
          Felice ", "
          comment ":"
          surfs up ", "
          stars ":"
          4 ", "
          date ":"
          2016 - 11 - 10 T18: 28: 10.396 Z "}]"
        }
      }
