// 1.2 | Insert our first users in users collection
// ------------------------------------------------


db.users.insertOne({
  "firstName": "John",
  "lastName": "Smith",
  "dateBirth": ISODate("2016-12-10T18:28:09.369Z"),
  "address": {
    "streetAddress": "21 2nd Street",
    "city": "New York",
    "state": "NY",
    "postalCode": "10021"
  }
})

db.users.insertOne({
  "firstName": "Josh",
  "lastName": "Morales",
  "dateBirth": ISODate("1992-01-06T18:28:09"),
  "address": {
    "streetAddress": "15060 SW 51st Street",
    "city": "Miramar",
    "state": "FL",
    "postalCode": "33027"
  }
})

db.users.insertOne({
  "firstName": "Jess",
  "lastName": "Gonzalez",
  "dateBirth": ISODate("1992-08-16T18:28:09"),
  "address": {
    "streetAddress": "117 SW 10th St",
    "city": "Miami",
    "state": "FL",
    "postalCode": "33130"
  }
})


// PASTE 3 USER INSERT QUERIES HERE

db.users.find().pretty()
db.users.find({firstName:"Jess"})
db.users.find({lastName:"Morales"})


// 1.3 | Insert our first products in products collection
// ------------------------------------------------------
// PASTE 3 PRODUCT INSERT QUERIES HERE

db.products.insertOne({
   "name": "Water Bottle",
   "description":"High quality glass bottle provides a healthier way to drink.  Silicone sleeve provides a good grip, a see-through window, and protects the glass vessel.  Eliminates toxic leaching that plastic can cause.  Innovative design holds 22-1/2 ounces.  Dishwasher safe",
   "category":"Kitchen",
   "price":23.0
})

db.products.insertOne({
   "name": "MacBook",
   "description":"Overpriced but beautiful machine.",
   "category":"Electronics",
   "price":1500.00
})

db.products.insertOne({
   "name": "Neck Massager",
   "description":"To help alleviate strain and stress.",
   "category":"Personal",
   "price":1000.00
})


// 1.4 | Getting Started with queries
// ----------------------------------
// PASTE SHOPPING CART QUERY HERE

db.users.updateOne(
  {_id : ObjectId("5a021aa77ae6f2ebb72ca0bf")},
  {$set:{
  shoppingCart: ObjectId("5a021d5c436c89d9a44942ff")
}})

db.users.find({shoppingCart:ObjectId("5a021d5c436c89d9a44942ff")})

// PASTE LIST PRODUCTS QUERY HERE

db.products.find().pretty()


// PASTE CATEGORY PRODUCTS QUERY HERE

db.products.find({category:"Electronics"}).pretty()


// PASTE DELETE PRODUCT QUERY HERE

db.products.deleteOne({"name":"Water Bottle"})


// PASTE REVIEW QUERY HERE

db.products.updateOne(
  {_id : ObjectId("5a021aa77ae6f2ebb72ca0bf")},
  {$set:{
  reviews: [
    {
      "name": "Jess",
      "comment": "This is so warm and comfortable.",
      "stars": 4,
      "date": "2016-11-10T18:28:09.369Z"
    }
  ]
}})


db.products.find({"reviews.stars":4}).pretty()
