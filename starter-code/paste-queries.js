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

db.users.insertMany([
  {
    "firstName": "Dani",
    "lastName": "Gonzalez",
    "dateBirth": ISODate("1987-07-07T18:28:09.369Z"),
    "address": {
      "streetAddress": "casa 3",
      "city": "Madrid",
      "state": "M",
      "postalCode": "230012"   }
    },
  {
    "firstName": "Yaiza",
    "lastName": "Garcia",
    "dateBirth": ISODate("1985-09-30T18:28:09.369Z"),
    "address": {
      "streetAddress": "calle falsa 123",
      "city": "Madrid",
      "state": "ES",
      "postalCode": "28005"   }
    }])


// 1.3 | Insert our first products in products collection
// ------------------------------------------------------
// PASTE 3 PRODUCT INSERT QUERIES HERE
db.products.insertOne(
  {
    "name": "Water Bottle",
    "description":"High quality glass bottle provides a healthier way to drink.  Silicone sleeve provides a good grip, a see-through window, and protects the glass vessel.  Eliminates toxic leaching that plastic can cause.  Innovative design holds 22-1/2 ounces.  Dishwasher safe",
    "category":"Kitchen",
    "price":23.0
 })

db.products.insertMany([
  {
    "name": "Mower",
    "description":"Big and red",
    "category":"Garden",
    "price":10.0
  },
  {
    "name": "Table",
    "description":"For 4 persons",
    "category":"Kitchen",
    "price":12.0
  }] )



// 1.4 | Getting Started with queries
// ----------------------------------
// PASTE SHOPPING CART QUERY HERE
db.users.updateOne({"firstName":"Yaiza"}, {$set:{"shoppinCart":[ObjectId("59aeabad0aad323205e8af2f"),ObjectId("59aeabad0aad323205e8af30")]}})

// PASTE LIST PRODUCTS QUERY HERE
db.products.find().pretty()

// PASTE CATEGORY PRODUCTS QUERY HERE
db.products.find({"category":"Kitchen"}).pretty()

// PASTE DELETE PRODUCT QUERY HERE
db.products.deleteOne({"name":"Table"})

// PASTE REVIEW QUERY HERE
db.products.updateOne(
  {"name":"Mower"},
  {$set: {"reviews": [{"name":"Shannon", "comment": "This is so warm and comfortable.", "star": 2, "date": "2016-11-10T18:28:09.369Z"}]}})
