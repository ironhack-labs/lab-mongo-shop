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

// PASTE 3 USER INSERT QUERIES HERE

db.users.insertMany([
... {
...   "firstName": "Harry",
...   "lastName": "Rodriguez",
...   "dateBirth": ISODate("1963-06-07T15:21:04.765Z"),
...   "address": {
...     "streetAddress": "1st Ave",
...     "city": "Boca Raton",
...     "state": "FL",
...     "postalCode": "33014"
...   }
... },
... {
...   "firstName": "Rafa",
...   "lastName": "Velilla",
...   "dateBirth": ISODate("1989-04-05T05:25:01.009Z"),
...   "address": {
...     "streetAddress": "Ashford Ave",
...     "city": "San Juan",
...     "state": "PR",
...     "postalCode": "00014"
...   }
... },
... {
...   "firstName": "Darwin",
...   "lastName": "Padro",
...   "dateBirth": ISODate("1969-03-03T01:01:01.111Z"),
...   "address": {
...     "streetAddress": "Caguas",
...     "city": "Manati",
...     "state": "PR",
...     "postalCode": "00124"
...   }
    }
])

// 1.3 | Insert our first products in products collection
db.users.insertOne(
{
   "name": "Water Bottle",
   "description":"High quality glass bottle provides a healthier way to drink.  Silicone sleeve provides a good grip, a see-through window, and protects the glass vessel.  Eliminates toxic leaching that plastic can cause.  Innovative design holds 22-1/2 ounces.  Dishwasher safe",
   "category":"Kitchen",
   "price":23.0
}
)
// ------------------------------------------------------
// PASTE 3 PRODUCT INSERT QUERIES HERE
db.users.insertMany([
  {
  "name": "T-shirt",
  "description":"Limited edition, let's do some simple addition. Fifty dollars for a T-shirt - that's just some ignorant bitch",
  "category":"Basics",
  "price":20.0
  },
  {
  "name": "Aged eggnog kit`",
  "description":"All you need to make eggnog at home is high-proof bourbon, high-proof rum, cognac, two dozen eggs, sugar, a bit of spice, a pinch of salt, and the ability to plan ahead. Let it sit for around a year. Make one by September. Crack it open after Thanksgiving a year later",
  "category":"Essentials",
  "price":24.0
  },
  {
    "name": "Cansei de Ser Sexy",
    "description":"CSS is a Brazilian rock band from Sao Paulo. The band was labeled as part of the explosion of the new rave scene. Their songs are in both English and Portuguese. Cansei de Ser Sexy literally translates as I got tired of being sexy",
    "category":"Essentials",
    "price":9.99
  }

])


// 1.4 | Getting Started with queries
// ----------------------------------
// PASTE SHOPPING CART QUERY HERE
db.users.updateMany(
  {},
  { $set: { "shoppingCart": [] } }
)

// PASTE LIST PRODUCTS QUERY HERE
db.products.find(
  {},{ name:1, _id:0 }
)

// PASTE CATEGORY PRODUCTS QUERY HERE
db.products.find(
  { 'category': 'Essentials' },{ name:1, _id:0 }
)

// PASTE DELETE PRODUCT QUERY HERE
db.products.deleteOne(
  { name:"T-shirt" }
)

// PASTE REVIEW QUERY HERE
db.users.updateOne(
    { 'name': 'Aged eggnog kit' },
    { $set: {
        "reviews": [
            {
              "name": "Santa",
              "comment": "Great kit! I once did one for two years, and it was awesome. The proteins break down, and these others flavors come out. After about a year, you’ll taste banana. After two years, you’ll taste dates and dried apricots. But I’m not patient enough for that, anymore.",
              "stars": 5,
              "date": "2017-01-01T00:00:00.369Z"
            }
            ]
        }
    }
)
