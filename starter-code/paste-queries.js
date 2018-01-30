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
        "firstName": "Álvaro",
        "lastName": "Kill",
        "dateBirth": ISODate("1991-12-10T18:28:09.369Z"),
        "address": {
          "streetAddress": "Moruxo 75",
          "city": "New York",
          "state": "NY",
          "postalCode": "15165"
        }
      },
      {
        "firstName": "Jesus",
        "lastName": "Del River",
        "dateBirth": ISODate("2016-12-10T18:28:09.369Z"),
        "address": {
          "streetAddress": "eira de arriba",
          "city": "New York",
          "state": "NY",
          "postalCode": "15660"
        }
      }
 ])
 
 
 // 1.3 | Insert our first products in products collection
 // ------------------------------------------------------
 // PASTE 3 PRODUCT INSERT QUERIES HERE
 db.products.insertMany([
    {
        "name": "Leche",
        "description":"muuy buena",
        "category":"Lacteo",
        "price":1,
     },
    {
        "name": "Water Bottle",
        "description":"High quality glass bottle provides a healthier way to drink.  Silicone sleeve provides a good grip, a see-through window, and protects the glass vessel.  Eliminates toxic leaching that plastic can cause.  Innovative design holds 22-1/2 ounces.  Dishwasher safe",
        "category":"Kitchen",
        "price":23.0
     },
     {
        "name": "WiredTiger T-shirt",
        "description":"Crafted from ultra-soft combed cotton, this essential t-shirt features sporty contrast tipping and MongoDB's signature leaf.",
        "category":"Apparel",
        "reviews": [
         {
           "name": "Shannon",
           "comment": "This is so warm and comfortable.",
           "stars": 2,
           "date": "2016-11-10T18:28:09.369Z"
         },
         {
           "name": "Shannon",
           "comment": "This is so warm and comfortable.",
           "stars": 3,
           "date": "2016-11-10T18:28:09.369Z"
         }
        ],
        "price":12.0
     }
 ])  
 
 
 // 1.4 | Getting Started with queries
 // ----------------------------------
 // PASTE SHOPPING CART QUERY HERE
 
 db.users.updateOne({"firstName": "Álvaro"},{$set:{"shoppingCart":[ObjectId("5a7091d0b50d71ac6727790a"),ObjectId("5a7091d0b50d71ac6727790b")] }})
 
 
 
 
 // PASTE LIST PRODUCTS QUERY HERE
 
 db.products.find()
 
 // PASTE CATEGORY PRODUCTS QUERY HERE
 
 db.products.find({"category":"Lacteo"})
 // PASTE DELETE PRODUCT QUERY HERE
 db.products.deletOne({"name": "Leche"})
 
 // PASTE REVIEW QUERY HERE
 
 db.products.updateOne({"name": "yogurt"},{$set:{"reviews":[{"name":"Marc","comment":"Es una basura","stars":"1","date":"2018-01-30"}] }})