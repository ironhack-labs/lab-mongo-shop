// 1.2 | Insert our first users in users collection
// ------------------------------------------------
// PASTE 3 USER INSERT QUERIES HERE
db.users.insertMany([
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
 },
 {
 "firstName": "Kevin",
   "lastName": "Silva",
   "dateBirth": ISODate("2011-03-15T18:28:09.369Z"),
   "address": {
     "streetAddress": "101 3rd Street",
     "city": "Miami",
     "state": "FL",
    "postalCode": "33301"
   }
 },
 {
 "firstName": "Bob",
   "lastName": "Doe",
   "dateBirth": ISODate("1993-05-01T18:28:09.369Z"),
   "address": {
     "streetAddress": "231 5th Street",
     "city": "San Diego",
     "state": "California",
    "postalCode": "22231"
   }
 }
 ]
)
// 1.3 | Insert our first products in products collection
// ------------------------------------------------------
// PASTE 3 PRODUCT INSERT QUERIES HERE
db.products.insertMany([
{
   "name": "Water Bottle",
   "description":"High quality glass bottle provides a healthier way to drink.  Silicone sleeve provides a good grip, a see-through window, and protects the glass vessel.  Eliminates toxic leaching that plastic can cause.  Innovative design holds 22-1/2 ounces.  Dishwasher safe",
   "category":"Kitchen",
   "price":23.0
},
{
   "name": "Gatorade",
   "description":"High quality electrolite drink.  Silicone sleeve provides a good grip, a see-through window. Innovative design holds 22-1/2 ounces.",
   "category":"Pantry",
   "price":3.0
},
{
   "name": "Yellow T-shirt",
   "description":"A T-shirt (or t shirt, or t) is a style of unisex fabric shirt, named after the T shape of the body and sleeves",
   "category":"Clothing",
   "price":15.0
}
])



// 1.4 | Getting Started with queries
// ----------------------------------
// PASTE SHOPPING CART QUERY HERE

db.users.updateOne(
  {"_id" : ObjectId("59498b13b84fcf711ce04541")},
  {$set: {"shoppingCart": [
    ObjectId("59498b4bb84fcf711ce04544"),
    ObjectId("59498b4bb84fcf711ce04543"),
  ]}}
)

// PASTE LIST PRODUCTS QUERY HERE

db.products.find().pretty()

// PASTE CATEGORY PRODUCTS QUERY HERE

db.products.find({"category": "Clothing"}).pretty()

// PASTE DELETE PRODUCT QUERY HERE

db.products.deleteOne({"_id" : ObjectId("59498b4bb84fcf711ce04544")})

// PASTE REVIEW QUERY HERE

db.products.updateOne(
  {"_id" : ObjectId("59498b4bb84fcf711ce04545")},
  {$set: {"reviews": {
    "name": "Kevin",
    "comment": "This t-shirt is super duper soft :)",
    "stars": 5,
    "date": "2016-11-10T18:28:09.369Z"
  }}}
)
