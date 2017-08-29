// 1.2 | Insert our first users in users collection
// ------------------------------------------------
> db.users.insertOne(
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
 )


// 1.3 | Insert our first products in products collection
// ------------------------------------------------------
> db.products.insertOne(
 {
    "name": "Water Bottle",
    "description":"High quality glass bottle provides a healthier way to drink.  Silicone sleeve provides a good grip, a see-through window, and protects the glass vessel.  Eliminates toxic leaching that plastic can cause.  Innovative design holds 22-1/2 ounces.  Dishwasher safe",
    "category":"Kitchen",
    "price":23.0
 }
 )


// 1.4 | Getting Started with queries
// ----------------------------------
> db.users.update(
 {firstName: "John" },
 { $set: { "shoppingCart": [ ObjectId("582e3dd006a0c0b81841f47e"), ObjectId("582e3cc7b03b5db7dd616cc8") ] }}
 )


// PASTE LIST PRODUCTS QUERY HERE
db.products.insertMany([
  {
   “name”: “Coke”,
   “description”:“Nice, refreshing coke”,
   “category”:“Kitchen”,
   “price”:30.0
  },
  {
    “name”: “Grass Cutter”,
    “description”:“Cut your grass easily”,
    “category”:“Home”,
    “price”:45.0
  }
])


// PASTE CATEGORY PRODUCTS QUERY HERE
db.products.find( { category: ‘Kitchen’ } ).pretty()


// PASTE DELETE PRODUCT QUERY HERE
db.products.deleteOne( { name: “Coke” } )


// PASTE REVIEW QUERY HERE
db.products.update(
  { name: ‘Water Bottle’ },
  {
    $set: { reviews: [
      {
        “name”: “Shannon”,
        “comment”: “This is so warm and comfortable.“,
        “stars”: 2,
        “date”: “2016-11-10T18:28:09.369Z”
      }
    ] }
  }
)

