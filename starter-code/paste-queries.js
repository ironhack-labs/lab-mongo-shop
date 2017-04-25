// 1.2 | Insert our first users in users collection

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
... } )



// ------------------------------------------------
// PASTE 3 USER INSERT QUERIES HERE
db.users.insertOne( {   "firstName": "Ernesto",   "lastName": "Quesada",   "dateBirth": ISODate("2016-12-10T18:28:09.369Z"),   "address": {     "streetAddress": "120 SW 8TH ST",     "city": "Miami",     "state": "FL",     "postalCode": "33130"   } } )

db.users.insertOne( {   "firstName": "Gustavo",   "lastName": "Gutierrez",   "dateBirth": ISODate("1989-09-02T18:28:09.369Z"),   "address": {     "streetAddress": "101 SW 36TH CT",     "city": "Miami",     "state": "FL",     "postalCode": "33135"   } } )

db.users.insertMany([ {   "firstName": "Nizar",   "lastName": "Iglesias",   "dateBirth": ISODate("2016-12-10T18:28:09.369Z"),   "address": {     "streetAddress": "120 SW 8TH ST",     "city": "Brickell",     "state": "FL",     "postalCode": "33132"   } }, {   "firstName": "Nick",   "lastName": "Borbe",   "dateBirth": ISODate("2016-12-10T18:28:09.369Z"),   "address": {     "streetAddress": "120 SW 8TH ST",     "city": "Coral Gables",     "state": "FL",     "postalCode": "33136"   } } ] )


// 1.3 | Insert our first products in products collection

db.products.insertOne({
... ...    "name": "Water Bottle",
... ...    "description":"High quality glass bottle provides a healthier way to drink.  Silicone sleeve provides a good grip, a see-through window, and protects the glass vessel.  Eliminates toxic leaching that plastic can cause.  Innovative design holds 22-1/2 ounces.  Dishwasher safe",
... ...    "category":"Kitchen",
... ...    "price":23.0
... ... })

// ------------------------------------------------------
// PASTE 3 PRODUCT INSERT QUERIES HERE

db.products.insertMany([
... {"name" : "Beer", "description" : "just plain beer", "category" : "Kitchen", "price" : 12 },
... {"name" : "Milk", "description" : "Organic cow milk", "category" : "Kitchen", "price" : 3 },
... {"name" : "Speakers", "description" : "Surround sound", "category" : "Electronics", "price" : 50 },
... {"name" : "Laptop", "description" : "1 TB RAM", "category" : "Electronics", "price" : 3000 }
... ])


// 1.4 | Getting Started with queries
// ----------------------------------
// PASTE SHOPPING CART QUERY HERE
db.users.updateMany(
... {},
... { $set : { shoppingCart : [] } } )

db.users.updateOne( {firstName : 'John'}, { $push : { 'shoppingCart' : ObjectId("58e950f0e486fe8672d46bbd") } } )

db.users.updateOne( {firstName : 'Nick'}, { $push : { 'shoppingCart' : ObjectId("58e950f0e486fe8672d46bbc") } } )

db.users.updateMany(
... {firstName : 'Nick', firstName : 'Ernesto' }, { $push : { 'shoppingCart' : ObjectId("58e94e9ce486fe8672d46bb9") } } )

db.users.updateMany( {firstName : 'Gustavo', firstName : 'Nizar' }, { $push : { 'shoppingCart' : ObjectId("58e950f0e486fe8672d46bba") } } )

db.users.updateOne( {  firstName : 'Gustavo' }, { $push : { shoppingCart : ObjectId("58e950f0e486fe8672d46bba") } } )

// PASTE LIST PRODUCTS QUERY HERE
db.products.find()

// PASTE CATEGORY PRODUCTS QUERY HERE
db.products.find(
... { category : 'Electronics' }
... )

// PASTE DELETE PRODUCT QUERY HERE
db.products.deleteOne(
... { name : 'Water Bottle' }
... )

// PASTE REVIEW QUERY HERE
db.products.updateOne(
... { name : 'Speakers' },
... { $set : { reviews : {
... name : 'Gustavo',
... comment : 'Greates speakers ever!!!',
... stars : 5,
... date : '2016-11-10T18:28:09.369Z'
... }}}
... )
