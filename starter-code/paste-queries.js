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
     "firstName": "Colby",
     "lastName": "Allen",
     "dateBirth": ISODate("2016-12-10T18:28:09.369Z"),
     "address": {
       "streetAddress": "9221 NE 2nd Ave",
       "city": "Miami",
       "state": "Florida",
       "postalCode": "33147"
     }
   },
     {
     "firstName": "Amie",
     "lastName": "Jean",
     "dateBirth": ISODate("2016-12-10T18:28:09.369Z"),
     "address": {
       "streetAddress": "24 Ocean Drive",
       "city": "Miami Beach",
       "state": "FL",
       "postalCode": "33161"
     }
   },
     {
     "firstName": "Jenny",
     "lastName": "Pierre",
     "dateBirth": ISODate("2016-12-10T18:28:09.369Z"),
     "address": {
       "streetAddress": "3 Some Rd",
       "city": "Miami",
       "state": "FL",
       "postalCode": "33169"
     }
   },
     {
     "firstName": "Thats",
     "lastName": "Notyourname",
     "dateBirth": ISODate("2016-12-10T18:28:09.369Z"),
     "address": {
       "streetAddress": "Itismyname Rd",
       "city": "No-Its-Not",
       "state": "Fl",
       "postalCode": "30001"
     }
   },
 ]);

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
         "name": "Chips",
         "description":"Highly unhealthy",
          "category":"Food",
          "price": 1.00
      },
      {
          "name": "Banana",
          "description":"Best fruit by far",
          "category":"Food",
          "price": 3.00
      },
      {
          "name": "Infinity",
          "description":"2013 Infinity G37 SlateBlue",
          "category":"Car",
          "price": 28000.00
      },
      {
          "name": "Cup",
          "description":"Drinking utensil",
          "category":"Kitchen",
          "price": 5.0
      },
  ])

// 1.4 | Getting Started with queries
// ----------------------------------
// PASTE SHOPPING CART QUERY HERE
db.users.updateMany(
      {},
      { $set: { "shoppingCart": [] } }
  )

db.users.updateOne({ firstName: 'John' },
  {$push: {shoppingCart: 'Infinity'}}
  )

// PASTE LIST PRODUCTS QUERY HERE
db.products.find();

// PASTE CATEGORY PRODUCTS QUERY HERE
db.products.find(
      { 'category': 'Food' },
  )

// PASTE DELETE PRODUCT QUERY HERE
db.products.deleteOne (
   {name : 'Water Bottle'}
 )

// PASTE REVIEW QUERY HERE
db.products.updateOne(
      { 'name': 'Banana' },
      { $set: {
          "reviews": [
              {
                "name": "Sharon",
                "comment": "This is great.",
                "stars": 4,
                "date": "2017-01-10T18:28:09.369Z"
              }
              ]
          }
      }
  )
