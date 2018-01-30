// 1.2 | Insert our first users in users collection
db.users.insertOne([
    ... "firstName": "John",
    ...   "lastName": "Smith",
    ...   "dateBirth": ISODate("2016-12-10T18:28:09.369Z"),
    ...   "address": {
    ...     "streetAddress": "21 2nd Street",
    ...     "city": "New York",
    ...     "state": "NY",
    ...     "postalCode": "10021"
    ...   }
    ... }])
// ------------------------------------------------
// PASTE 3 USER INSERT QUERIES HERE
db.users.insertMany([{
    ...   "firstName": "Giorgio",
    ...   "lastName": "Grassini",
    ...   "dateBirth": ISODate("1994-07-13T18:28:09.369Z"),
    ...   "address": {
    ...     "streetAddress": "13 seconda strada",
    ...     "city": "Firenze",
    ...     "state": "IT",
    ...     "postalCode": "28009"
    ...   }
    ... },
    ... {
    ...   "firstName": "Jose",
    ...   "lastName": "Sanchez",
    ...   "dateBirth": ISODate("1994-12-10T18:28:09.369Z"),
    ...   "address": {
    ...     "streetAddress": "14 calle",
    ...     "city": "Madrid",
    ...     "state": "ES",
    ...     "postalCode": "28005"
    ...   }
    ... }])

// 1.3 | Insert our first products in products collection
db.products.insertOne(
    ... {
    ...    "name": "Water Bottle",
    ...    "description":"High quality glass bottle provides a healthier way to drink.  Silicone sleeve provides a good grip, a see-through window, and protects the glass vessel.  Eliminates toxic leaching that plastic can cause.  Innovative design holds 22-1/2 ounces.  Dishwasher safe",
    ...    "category":"Kitchen",
    ...    "price":23.0
    ... })
// ------------------------------------------------------
// PASTE 3 PRODUCT INSERT QUERIES HERE
db.products.insertMany([
    ... {
    ...    "name": "Bread",
    ...    "description":"High quality bread to eat.",
    ...    "category":"Kitchen",
    ...    "price":1.0
    ... },
    ... {
    ...    "name": "Shampoo",
    ...    "description":"High quality shampoo.",
    ...    "category":"Beauty",
    ...    "price":5.0
    ... },
    ... {
    ...    "name": "Eggs",
    ...    "description":"12 xl eggs",
    ...    "category":"Kitchen",
    ...    "price":5.5
    ... }])

// 1.4 | Getting Started with queries
db.users.updateMany([
    ... {
    ...    "name": "Bread",
    ...    "description":"High quality bread to eat.",
    ...    "category":"Kitchen",
    ...    "price":1.0
    ... },
    ... {
    ...    "name": "Shampoo",
    ...    "description":"High quality shampoo.",
    ...    "category":"Beauty",
    ...    "price":5.0
    ... },
    ... {
    ...    "name": "Eggs",
    ...    "description":"12 xl eggs",
    ...    "category":"Kitchen",
    ...    "price":5.5
    ... }])
// ----------------------------------
// PASTE SHOPPING CART QUERY HERE

db.users.insertOne(
    ...     {"shoppingCart" : []}
    ... )
    {

// PASTE LIST PRODUCTS QUERY HERE
db.products.find({})


// PASTE CATEGORY PRODUCTS QUERY HERE
db.products.find(
    ... {category:"Kitchen"})

// PASTE DELETE PRODUCT QUERY HERE
db.products.deleteOne(
    ... {"name": "Water Bottle"})

// PASTE REVIEW QUERY HERE

  db.products.updateOne(
    { "name": "Shampoo"},
    { $set: { "name": "Shannon",
    "comment": "This is so warm and comfortable.",
    "stars": 2,
    "date": "2016-11-10T18:28:09.369Z" }}
  )