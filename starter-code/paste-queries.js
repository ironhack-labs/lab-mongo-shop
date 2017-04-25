// 1.2 | Insert our first users in users collection
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

// ------------------------------------------------
// PASTE 3 USER INSERT QUERIES HERE
db.users.manyMany([
  {
    "firstName": "Wadsom",
    "lastName": "Fleurigene",
    "dateBirth": ISODate("2016-12-10T18:28:09.369Z"),
    "address": {
      "streetAddress": "1700 SW 78TH AVE",
      "city": "Plantation",
      "state": "FL",
      "postalCode": "3324"
    }
  },
  {
    "firstName": "Orestes",
    "lastName": "Garcia",
    "dateBirth": ISODate("2016-12-10T18:28:09.369Z"),
    "address": {
      "streetAddress": "1201 NW 3rd AVE",
      "city": "Miami",
      "state": "FL",
      "postalCode": "33136"
    }
  },{
    "firstName": "Maria",
    "lastName": "Vazquez",
    "dateBirth": ISODate("2016-12-10T18:28:09.369Z"),
    "address": {
      "streetAddress": "300 8th Street",
      "city": "Orlando",
      "state": "FL",
      "postalCode": "33121"
    }
  }
])

// 1.3 | Insert our first products in products collection

db.products.insertOne({
   "name": "Water Bottle",
   "description":"High quality glass bottle provides a healthier way to drink.  Silicone sleeve provides a good grip, a see-through window, and protects the glass vessel.  Eliminates toxic leaching that plastic can cause.  Innovative design holds 22-1/2 ounces.  Dishwasher safe",
   "category":"Kitchen",
   "price":23.0
})

// ------------------------------------------------------
// PASTE 3 PRODUCT INSERT QUERIES HERE
db.products.insertMany([
  {
     "name": "Hand Gun",
     "description":"Polymer Handgun made by Glock in Austria",
     "category":"Firearms",
     "price":599.95
  },{
     "name": "Macbook Pro",
     "description":"3.7ghz 16GB RAM, Manfactured by Apple Inc., In Cupertino California",
     "category":"Computing",
     "price":9999.95
  },{
     "name": "V-Neck TShirt",
     "description":"Silky smooth t-shirt created by American Appearal",
     "category":"Clothing",
     "price":45.0
  }
])

// 1.4 | Getting Started with queries
// ----------------------------------
// PASTE SHOPPING CART QUERY HERE

db.users.updateMany({},
  { $set: { shoppingCart: [] }
})


// PASTE LIST PRODUCTS QUERY HERE
db.products.find({},
{name: 1, _id: 0}
)

// PASTE CATEGORY PRODUCTS QUERY HERE

db.products.find({},
{category: 1, _id: 0}
)

// PASTE DELETE PRODUCT QUERY HERE

db.products.deleteOne({
  "_id": ObjectId("58e94645617fc5e808c42550") }
)

// PASTE REVIEW QUERY HERE
db.products.updateOne({},
  { $push: { reviews: {
    "name": "Shannon",
    "comment": "This is so warm and comfortable.",
    "stars": 2,
    "date": "2016-11-10T18:28:09.369Z"
  }
}
})
