// 1.2 | Insert our first users in users collection
// ------------------------------------------------
// PASTE 3 USER INSERT QUERIES HERE

db.users.insertOne(
... {
...   "firstName": "Maria",
...   "lastName": "Pottage",
...   "dateBirth": ISODate("1985-03-10T18:28:09.369Z"),
...   "address": {
...     "streetAddress": "151 1st Street",
...     "city": "Miami",
...     "state": "FL",
...     "postalCode": "33131"
...   }
... })

db.users.insertOne(
... {
...   "firstName": "Dianelis",
...   "lastName": "Insua",
...   "dateBirth": ISODate("1993-08-11T18:27:09.369Z"),
...   "address": {
...     "streetAddress": "850 Brickell Av.",
...     "city": "Miami",
...     "state": "FL",
...     "postalCode": "33131"
...   }
... })

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

db.users.find().pretty()


// 1.3 | Insert our first products in products collection
// ------------------------------------------------------
// PASTE 3 PRODUCT INSERT QUERIES HERE

db.products.insertOne(
... {
...   "name": "WiredTiger T-shirt",
...   "description":"Crafted from ultra-soft combed cotton, this essential t-shirt features sporty contrast tipping and MongoDB's signature leaf.",
...   "category":"Apparel",
...    "price":12.0
... })

db.products.insertOne(
... {
...   "name": "Colore Watercolor Pencils",
...   "description":"Water Soluble Colored Pencils For Art Students & Professionals. Set of 72",
...   "category":"Art Supplies",
...    "price":25.0
... })

db.products.insertOne(
... {
...    "name": "Water Bottle",
...    "description":"High quality glass bottle provides a healthier way to drink.  Silicone sleeve provides a good grip, a see-through window, and protects the glass vessel.  Eliminates toxic leaching that plastic can cause.  Innovative design holds 22-1/2 ounces.  Dishwasher safe",
...    "category":"Kitchen",
...    "price":23.0
... })

db.products.find().pretty()



// 1.4 | Getting Started with queries
// ----------------------------------
// PASTE SHOPPING CART QUERY HERE
db.users.updateMany({}, {$set: {"shoppingCart":[]}})

db.users.find().pretty()

db.users.updateOne ({firstName: "Maria"}, {$set: {"shoppingCart": [{
"_id" : ObjectId("58e9481df928c6effa1dd6ec"),
"name" : "WiredTiger T-shirt",
"description" : "Crafted from ultra-soft combed cotton, this essential t-shirt features sporty contrast tipping and MongoDB's signature leaf.",
"category" : "Apparel",
"price" : 12
},
{
"_id" : ObjectId("58e94930f928c6effa1dd6ed"),
"name" : "Colore Watercolor Pencils",
"description" : "Water Soluble Colored Pencils For Art Students & Professionals. Set of 72",
"category" : "Art Supplies",
"price" : 25
}]}})

db.users.updateOne ({firstName: "Dianelis"}, {$set: {"shoppingCart": [
{
"name": "Water Bottle",
"description":"High quality glass bottle provides a healthier way to drink.  Silicone sleeve provides a good grip, a see-through window, and protects the glass vessel.  Eliminates toxic leaching that plastic can cause.  Innovative design holds 22-1/2 ounces.  Dishwasher safe",
"category":"Kitchen",
"price":23.0
},
  {
"_id" : ObjectId("58e9481df928c6effa1dd6ec"),
"name" : "WiredTiger T-shirt",
"description" : "Crafted from ultra-soft combed cotton, this essential t-shirt features sporty contrast tipping and MongoDB's signature leaf.",
"category" : "Apparel",
"price" : 12
}
]}})

db.users.find().pretty()

// PASTE LIST PRODUCTS QUERY HERE
db.products.find().pretty()

// PASTE CATEGORY PRODUCTS QUERY HERE
db.products.find({"category":"Apparel"}).pretty()

db.products.find({"category":"Kitche"}).pretty()

db.products.find({"category":"Art Supplies"}).pretty()


// PASTE DELETE PRODUCT QUERY HERE
db.products.deleteOne()

// PASTE REVIEW QUERY HERE


db.products.updateOne({"name":"WiredTiger T-shirt"}, {$set: {"reviews": [
    {
      "name": "Shannon",
      "comment": "This is so warm and comfortable.",
      "stars": 2,
      "date": "2016-11-10T18:28:09.369Z"
    }
  ]}})
