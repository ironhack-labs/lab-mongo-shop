// 1.2 | Insert our first users in users collection
// ------------------------------------------------
// PASTE 3 USER INSERT QUERIES HERE
db.users.insertOne({
    ...   "firstName": "John",
    ...   "lastName": "Smith",
    ...   "dateBirth": ISODate("2016-12-10T18:28:09.369Z"),
    ...   "address": {
    ...     "streetAddress": "21 2nd Street",
    ...     "city": "New York",
    ...     "state": "NY",
    ...     "postalCode": "10021"
    ...   }
    ... });
    
    db.users.insertOne({   "firstName": "Pedro",   "lastName": "Neto",   "dateBirth": ISODate("1991-05-03T18:28:09.369Z"),   "address": {     "streetAddress": "Rua da Ordem 736",     "city": "Aveiro",     "state": "Aveiro",     "postalCode": "3885"   } })

    db.users.insertOne({   "firstName": "Filipe",   "lastName": "Rainho",   "dateBirth": ISODate("1992-05-22T18:28:09.369Z"),   "address": {     "streetAddress": "Verdi 9",     "city": "Sta Coloma Gramenet",     "state": "Catalonia",     "postalCode": "08921"   } })

// 1.3 | Insert our first products in products collection
// ------------------------------------------------------
// PASTE 3 PRODUCT INSERT QUERIES HERE
db.products.insertOne({
    ...    "name": "Water Bottle",
    ...    "description":"High quality glass bottle provides a healthier way to drink.  Silicone sleeve provides a good grip, a see-through window, and protects the glass vessel.  Eliminates toxic leaching that plastic can cause.  Innovative design holds 22-1/2 ounces.  Dishwasher safe",
    ...    "category":"Kitchen",
    ...    "price":23.0
    ... })
    
    db.products.insertOne({    "name": "Wine Bottle",    "description":"High quality glass bottle provides a healthier way to drink.  Silicone sleeve provides a good grip, a see-through window, and protects the glass vessel.  Eliminates toxic leaching that plastic can cause.  Innovative design holds 22-1/2 ounces.  Dishwasher safe",    "category":"Kitchen",    "price":40.0 })

    db.products.insertOne({    "name": "Beer Bottle",    "description":"High quality glass bottle provides a healthier way to drink.  Silicone sleeve provides a good grip, a see-through window, and protects the glass vessel.  Eliminates toxic leaching that plastic can cause.  Innovative design holds 22-1/2 ounces.  Dishwasher safe",    "category":"Kitchen",    "price":5.0 })

// 1.4 | Getting Started with queries
// ----------------------------------
// PASTE SHOPPING CART QUERY HERE
db.users.updateOne({'firstName': "Pedro"},{ $set: {"shoppingCart": [ObjectId("5a706fbe8093049b14c01762"), ObjectId("5a706fa78093049b14c01761")]}} )j

// PASTE LIST PRODUCTS QUERY HERE
db.products.find().pretty()


// PASTE CATEGORY PRODUCTS QUERY HERE
// We used same category so we queried by price:
db.products.find({"price": 23}).pretty()
db.products.find({"price": 40}).pretty()

// PASTE DELETE PRODUCT QUERY HERE
db.products.deleteOne({"_id" : ObjectId("5a706fa78093049b14c01761")})


// PASTE REVIEW QUERY HERE
db.products.updateOne({"name": "Water Bottle"}, { $set: {"reviews": [
    ...     {
    ...       "name": "Shannon",
    ...       "comment": "This is so warm and comfortable.",
    ...       "stars": 2,
    ...       "date": "2016-11-10T18:28:09.369Z"
    ...     }
    ...   ]}})
    
