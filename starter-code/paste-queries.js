// 1.2 | Insert our first users in users collection
// ------------------------------------------------
// PASTE 5 USER INSERT QUERIES HERE
db.users.insertOne(
... {
...   "firstName": "John",
...   "lastName": "Smith",
...   "dateBirth": ISODate("2016-12-10T18:28:09.369Z"),
...   "address": {
...     "streetAddress": "21 2nd Street",
...     "city": "New York",
...     "state": "NY",
...     "postalCode": "10021"
...   }
... })

db.users.insertMany([
... {
...   "firstName": "Aleksandra",
...   "lastName": "Boskovic",
...   "dateBirth": ISODate("1985-01-17T18:28:09.369Z"),
...   "address": {
...     "streetAddress": "1234 Some Street",
...     "city": "Miami",
...     "state": "FL",
...     "postalCode": "33130"
...   }
... },
... {
...   "firstName": "Sneza",
...   "lastName": "Sne",
...   "dateBirth": ISODate("2014-11-10T18:28:09.369Z"),
...   "address": {
...     "streetAddress": "21 2nd Street",
...     "city": "Lancaster",
...     "state": "PA",
...     "postalCode": "77377"
...   }
... },
... {
...   "firstName": "Art",
...   "lastName": "Yabkevich    ",
...   "dateBirth": ISODate("2017-12-10T18:28:09.369Z"),
...   "address": {
...     "streetAddress": "1023 SW 6th ST",
...     "city": "Miami",
...     "state": "FL",
...     "postalCode": "33130"
...   }
... },
... {
...  "firstName": "Collin",
...  "lastName": "Powers",
...  "dateBirth": ISODate("2014-11-10T18:28:09.369Z"),
...  "address": {
...    "streetAddress": "15 5th Street",
...    "city": "Somewhere",
...    "state": "PA",
...    "postalCode": "74327"
...  }
... }
... ])

// 1.3 | Insert our first products in products collection
// ------------------------------------------------------
// PASTE 3 PRODUCT INSERT QUERIES HERE

db.products.insertOne(
... {
...    "name": "Water Bottle",
...    "description":"High quality glass bottle provides a healthier way to drink.  Silicone sleeve provides a good grip, a see-through window, and protects the glass vessel.  Eliminates toxic leaching that plastic can cause.  Innovative design holds 22-1/2 ounces.  Dishwasher safe",
...    "category":"Kitchen",
...    "price":23.0
... })

db.products.insertMany(
... [{
...    "name": "Orange Juice",
...    "description":"Organic juice made from best Florida oranges",
...    "category":"Drink",
...    "price":5.0
... },
... {
...    "name": "Sandwich",
...    "description":"The best of Miami",
...    "category":"Food",
...    "price":12.0
... },
... {
...    "name": "Beer",
...    "description":"Bobbling water that makes you happy",
...    "category":"Bar",
...    "price":25.0
... },
... {
...    "name": "Pizza",
...    "description":"No description needed",
...    "category":"Restaurant",
...    "price":50.0
... }]
... )

// 1.4 | Getting Started with queries
// ----------------------------------
// PASTE SHOPPING CART QUERY HERE
db.users.updateMany(
... {},
... {$set: {shoppingCart:[]}}
... )

db.users.updateOne(
... {_id:ObjectId("58e946a0911e7f25d3eb9abe")},
... {$push: {shoppingCart: 'Beer'}}
... )


// PASTE LIST PRODUCTS QUERY HERE

db.products.find(
... {},
... {name:1, _id:0}
... )

// PASTE CATEGORY PRODUCTS QUERY HERE

db.products.find(
... {category:'Kitchen'},
... {name:1, _id:0}
... )

// PASTE DELETE PRODUCT QUERY HERE

db.products.deleteOne(
... {name: 'Sandwich'}
... )

// PASTE REVIEW QUERY HERE

db.products.updateOne(
... {name:'Beer'},
... {$set: {reviews:[{
...       "name": "Shannon",
...       "comment": "This is the best IPA on the market",
...       "stars": 5,
...       "date": "2016-11-10T18:28:09.369Z"
...     }]}})
