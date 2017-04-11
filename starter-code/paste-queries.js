// 1.2 | Insert our first users in users collection
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
}
);
// ------------------------------------------------
// PASTE 4 USER INSERT QUERIES HERE
db.users.insertMany([
{
  "firstName": "Art",
  "lastName": "Yabkevich",
  "dateBirth": ISODate("2016-12-10T18:28:09.369Z"),
  "address": {
    "streetAddress": "1023 SW 6th Street",
    "city": "Miami",
    "state": "FL",
    "postalCode": "33130"
  }
},
{
  "firstName": "Chris",
  "lastName": "Ruiz",
  "dateBirth": ISODate("2016-12-10T18:28:09.369Z"),
  "address": {
    "streetAddress": "1023 SW 6th Street",
    "city": "Doral",
    "state": "FL",
    "postalCode": "33133"
  }
},
{
  "firstName": "Alex",
  "lastName": "Herasimovich",
  "dateBirth": ISODate("2016-12-10T18:28:09.369Z"),
  "address": {
    "streetAddress": "800 avenue",
    "city": "Toronto",
    "state": "Canada",
    "postalCode": "080916"
  }
},
{
  "firstName": "Karina",
  "lastName": "Yahav",
  "dateBirth": ISODate("2016-12-10T18:28:09.369Z"),
  "address": {
    "streetAddress": "1023 SW 6th ST",
    "city": "Miami",
    "state": "FL",
    "postalCode": "33130"
  }
}
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
   "name": "Beer",
   "description":"Soda for adults",
   "category":"Food",
   "price":3.99
},
{
   "name": "Pizza",
   "description":"Anyday food",
   "category":"Food",
   "price":5.99
},
{
   "name": "Orange Juice",
   "description":"Organic and fresh",
   "category":"Food",
   "price":2.99
},
{
   "name": "Water",
   "description":"Simply water",
   "category":"Food",
   "price":0.99
},

]);

// 1.4 | Getting Started with queries
// ----------------------------------
// PASTE SHOPPING CART QUERY HERE
db.users.updateMany(
  {},
  {$set:{shoppingCart:[]}}
);

db.users.updateOne(
  {firstName: "Art"},
  {$push:{shoppingCart:"Pizza"}}
);
// PASTE LIST PRODUCTS QUERY HERE
db.products.find(
  {},
  {name:1, _id:0}
);

// PASTE CATEGORY PRODUCTS QUERY HERE
db.products.find(
  {category: "Food"},
  {name:1, _id:0}
);

// PASTE DELETE PRODUCT QUERY HERE
db.products.deleteOne(
  {name:"Water"}
);

// PASTE REVIEW QUERY HERE
db.products.updateOne(
  {name:"Beer"},
  {$set:{"reviews": [
    {
      "name": "Art",
      "comment": "This is so refreshingly delicious.",
      "stars": 5,
      "date": "2016-11-10T18:28:09.369Z"
    }
  ]}}
);
