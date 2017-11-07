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
    },
    "shoppingCart":[]
  },
 {
   "firstName": "Marisa",
   "lastName": "Bruno",
   "dateBirth": ISODate("1994-03-02T18:28:09.369Z"),
   "address": {
    "streetAddress": "120 SW 8th St",
    "city": "Miami",
    "state": "FL",
    "postalCode": "33130"
    },
    "shoppingCart":[]
  },
  {
    "firstName": "Caroline",
    "lastName": "Eli",
    "dateBirth": ISODate("1994-08-20T18:28:09.369Z"),
    "address": {
     "streetAddress": "138 NE 22nd St",
     "city": "Charlotte",
     "state": "NC",
     "postalCode": "20854"
    },
    "shoppingCart":[]
   }
]);

// 1.3 | Insert our first products in products collection
// ------------------------------------------------------
// PASTE 3 PRODUCT INSERT QUERIES HERE
db.products.insertMany([
  {"name": "Water Bottle",
  "description":"High quality glass bottle provides a healthier way to drink.  Silicone sleeve provides a good grip, a see-through window, and protects the glass vessel.  Eliminates toxic leaching that plastic can cause.  Innovative design holds 22-1/2 ounces.  Dishwasher safe",
  "category":"Kitchen",
  "price":23.0,
  "reviews":[]
  },
  {"name": "Snickers Bar",
  "description":"Yummy Goodness",
  "category":"Food",
  "price":3.0,
  "reviews":[]
  },
  {"name": "Shower Curtain",
  "description":"Cheap plastic; Made in China",
  "category":"Bathroom",
  "price":16.0,
  "reviews":[]
  }
]);

// 1.4 | Getting Started with queries
// ----------------------------------
// PASTE SHOPPING CART QUERY HERE

db.users.updateOne(
  {name:"Marisa"},
  {$push:{"shoppingCart":"Water Bottle"}},
  {$push:{"shoppingCart":"Snickers Bar"}}
);

// PASTE LIST PRODUCTS QUERY HERE

db.products.find();

// PASTE CATEGORY PRODUCTS QUERY HERE
//Example belwo:
db.products.find({category:"kitchen"});

// PASTE DELETE PRODUCT QUERY HERE
db.products.deleteOne({name:"Water Bottle"});

// PASTE REVIEW QUERY HERE

db.products.updateOne({name:"Shower Curtain"},{$push:{reviews:
  {name:"Shannon",
  comments:"This is a super cheap shower curtain",
  stars:2,
  date: "2016-11-10T18:28:09.369Z"}
}
});
