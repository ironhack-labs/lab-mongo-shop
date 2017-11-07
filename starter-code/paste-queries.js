// 1.2 | Insert our first users in users collection
// ------------------------------------------------
// PASTE 3 USER INSERT QUERIES HERE
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
  "firstName": "Joshua",
  "lastName": "Jamison",
  "dateBirth": ISODate("1983-02-24T18:28:09.369Z"),
  "address": {
    "streetAddress": "100 25th street",
    "city": "New York",
    "state": "NY",
    "postalCode": "10023"
  }
})

db.users.insertOne({
  "firstName": "Jesus",
  "lastName": "Bordones",
  "dateBirth": ISODate("1992-10-06T18:28:09.369Z"),
  "address": {
    "streetAddress": "500 Brickell Av",
    "city": "Miami",
    "state": "Fl",
    "postalCode": "33131"
  }
})


// 1.3 | Insert our first products in products collection
// ------------------------------------------------------
// PASTE 3 PRODUCT INSERT QUERIES HERE

db.products.insertOne(
{
   "name": "Water Bottle",
   "description":"High quality glass bottle provides a healthier way to drink.  Silicone sleeve provides a good grip, a see-through window, and protects the glass vessel.  Eliminates toxic leaching that plastic can cause.  Innovative design holds 22-1/2 ounces.  Dishwasher safe",
   "category":"Kitchen",
   "price":23.0
}
)

db.products.insertOne(
{
   "name": "T-shirt",
   "description":"Something that you put on your back",
   "category":"Clothing",
   "price":10.0
}
)

db.products.insertOne(
{
   "name": "Nintendo Switch",
   "description":"The ultimate Nintendo console for playing",
   "category":"Electronics",
   "price":299.0
}
)


// 1.4 | Getting Started with queries
// ----------------------------------
// PASTE SHOPPING CART QUERY HERE
db.users.updateOne(
  { 'firstName': 'Joshua'},
  {
    $set: { 'shoppingCart':[ObjectId("5a020a85f8bedf4a992b8a32")]}
    }
)

// PASTE LIST PRODUCTS QUERY HERE
db.products.find().pretty()

// PASTE CATEGORY PRODUCTS QUERY HERE
db.products.find({"category":"Electronics"}).pretty()

// PASTE DELETE PRODUCT QUERY HERE
db.products.deleteOne({"_id" : ObjectId("5a0209f2f8bedf4a992b8a31") })

// PASTE REVIEW QUERY HERE
db.products.updateOne(
  { "name":"Water Bottle"},
  {
    $set: {"reviews": [
    {
      "name": "Shannon",
      "comment": "This is so warm and comfortable.",
      "stars": 2,
      "date": "2016-11-10T18:28:09.369Z"
    }
  ]}
  }
)
