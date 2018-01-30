import { ObjectId } from "../../../../../Library/Caches/typescript/2.6/node_modules/@types/bson";

// 1.2 | Insert our first users in users collection
// ------------------------------------------------
// db.users.insertMany([
     {
       "firstName": "Alberto",
       "lastName": "Sánchez",
       "dateBirth": ISODate("2016-12-10T18:28:09.369Z"),
       "address": {
         "streetAddress": "21 Street",
         "city": "New York",
         "state": "NY",
         "postalCode": "10021"
       }
     },
     {
       "firstName": "Adrián",
       "lastName": "Chacón",
       "dateBirth": ISODate("2016-12-10T18:28:09.369Z"),
       "address": {
         "streetAddress": "13 Street",
         "city": "New York",
         "state": "NY",
         "postalCode": "10121"
       }
     },
     {
     "firstName": "John",
        "lastName": "Smith",
        "dateBirth": ISODate("2016-12-10T18:28:09.369Z"),
        "address": {
          "streetAddress": "21 2nd Street",
          "city": "New York",
          "state": "NY",
          "postalCode": "10021"
        }
      }
    ]
)

// 1.3 | Insert our first products in products collection
// ------------------------------------------------------
// PASTE 3 PRODUCT INSERT QUERIES HERE
db.products.insertMany(
[
    {
     "name": "Water Bottle",
     "description":"High quality glass bottle provides a healthier way to drink.  Silicone sleeve provides a good grip, a see-through window, and protects the glass vessel.  Eliminates toxic leaching that plastic can cause.  Innovative design holds 22-1/2 ounces.  Dishwasher safe",
     "category":"Kitchen",
     "price":23.0
  },{
     "name": "cocacola",
     "description":"High quality glass bottle provides a healthier way to drink.  Silicone sleeve provides a good grip, a see-through window, and protects the glass vessel.  Eliminates toxic leaching that plastic can cause.  Innovative design holds 22-1/2 ounces.  Dishwasher safe",
     "category":"Kitchen",
     "price":2.0
  },{
     "name": "Gin Tonic",
     "description":"High quality glass bottle provides a healthier way to drink.  Silicone sleeve provides a good grip, a see-through window, and protects the glass vessel.  Eliminates toxic leaching that plastic can cause.  Innovative design holds 22-1/2 ounces.  Dishwasher safe",
     "category":"Kitchen",
     "price":10.0
  }
]
)

// 1.4 | Getting Started with queries
// ----------------------------------
db.users.updateOne(
    {"firstName": "Alberto"},
    {$set: {"shoppingCard":[ObjectId("5a707ba4cb66866a36c61395")]}}
)

// PASTE LIST PRODUCTS QUERY HERE
db.products.find()

// PASTE CATEGORY PRODUCTS QUERY HERE
db.products.find({category :"Kitchen"})

// PASTE DELETE PRODUCT QUERY HERE
db.products.deleteOne({"name":"Gin Tonic"})

// PASTE REVIEW QUERY HERE
db.products.updateOne(
    {"name":"cocacola"},
    {$set: { "review":[
        {
          "name": "Shannon",
          "comment": "This is so warm and comfortable.",
          "stars": 2,
          "date": "2016-11-10T18:28:09.369Z"
        }
      ]}}
)
