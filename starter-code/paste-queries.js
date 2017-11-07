// 1.2 | Insert our first users in users collection
// ------------------------------------------------
db.users.insertOne(
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
  })
  db.users.insertMany([
  {
    "firstName": "Armando",
    "lastName": "Acosta",
    "dateBirth": ISODate("1990-12-23T18:28:09.369Z"),
    "address": {
      "streetAddress": "123 Baker Street",
      "city": "Troy",
      "state": "NY",
      "postalCode": "10021"
    }
  },
  {
    "firstName": "Alejandro",
    "lastName": "Poggi",
    "dateBirth": ISODate("1993-04-19T18:28:09.369Z"),
    "address": {
      "streetAddress": "5285 SW 84th Street",
      "city": "Miami",
      "state": "FL",
      "postalCode": "33143"
    }
  }
])


// 1.3 | Insert our first products in products collection
// ------------------------------------------------------
db.products.insertOne(
{
   "name": "Water Bottle",
   "description":"High quality glass bottle provides a healthier way to drink.  Silicone sleeve provides a good grip, a see-through window, and protects the glass vessel.  Eliminates toxic leaching that plastic can cause.  Innovative design holds 22-1/2 ounces.  Dishwasher safe",
   "category":"Kitchen",
   "price":23.0
}
)
db.products.insertMany([
  {
    "name": "Chocolate",
    "description":"The finest chocolate east of the Mississippi.",
    "category":"Food",
    "price":8.0
  },
  {
    "name": "Grappling Hook",
    "description":"I'm batman!",
    "category":"Terrain",
    "price":23.0
  }
  ])

// 1.4 | Getting Started with queries
// ----------------------------------
db.users.updateOne(
{
  firstName: 'Alejandro'
},
{
  $push: {'shoppingCart': ObjectId("5a020a14fd00060cac495048")}
}
)


// PASTE LIST PRODUCTS QUERY HERE
db.products.find().pretty()

// PASTE CATEGORY PRODUCTS QUERY HERE
db.products.find(
{
  category: {$eq: 'Terrain'}
}
)

// PASTE DELETE PRODUCT QUERY HERE
db.products.deleteOne(
{
  name: 'Water Bottle'
}
)

// PASTE REVIEW QUERY HERE
db.products.updateOne(
{
  name: 'Grappling Hook'
},
{
    $push:
      {
        reviews:
        {
          name:  'Alejandro',
          comment: 'Didnt die.',
          stars:  5,
          date: "2016-11-10T18:28:09.369Z"
        }
      }
}
)
