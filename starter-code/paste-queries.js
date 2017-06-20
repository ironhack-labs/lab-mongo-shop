// 1.2 | Insert our first users in users collection
// ------------------------------------------------
// PASTE 3 USER INSERT QUERIES HERE
// db.users.insertOne(
// ... {
// ...   "firstName": "John",
// ...   "lastName": "Smith",
// ...   "dateBirth": ISODate("2016-12-10T18:28:09.369Z"),
// ...   "address": {
// ...     "streetAddress": "21 2nd Street",
// ...     "city": "New York",
// ...     "state": "NY",
// ...     "postalCode": "10021"
// ...   }
// ... }
// ... )
// db.users.insertOne(
// ... {
// ... firstName:"Jarrod",
// ... lastName:"Luca",
// ... dateBirth:ISODate("1996-10-16T11:43:16.369Z"),
// ... address: {
// ... streetAddress:"2796 Shipping Avenue",
// ... city:"Miami",
// ... state:"FL"
// ... postalCode:33133
// ... }
// ... }
// ... )
// > db.users.insertOne( { firstName:"Ihor", lastName:"Bodnarchuk", dateBirth:ISODate("1994-00-28T11:43:16.369Z"),
// address: { streetAddress:"117 sw 10th st apt 1708", city:"Miami", state:"FL", postalCode:33130 } } )
// 1.3 | Insert our first products in products collection
// ------------------------------------------------------
// PASTE 3 PRODUCT INSERT QUERIES HERE
// db.products.insertOne(
// ... {
// ...    "name": "Water Bottle",
// ...    "description":"High quality glass bottle provides a healthier way to drink.  Silicone sleeve provides a good grip, a see-through window, and protects the glass vessel.  Eliminates toxic leaching that plastic can cause.  Innovative design holds 22-1/2 ounces.  Dishwasher safe",
// ...    "category":"Kitchen",
// ...    "price":23.0
// ... }
// ... )
// > db.products.insertOne( {    "name": "Cottage cheese",    "description":"High protein low-fat cottage cheese",    "category":"Dairy",    "price":2.0 } )
// > db.products.insertOne( {    "name": "Snacks",    "description":"Assorted variety of building.co snacks",    "category":"Snacks",    "price":0.0 } )
// 1.4 | Getting Started with queries
// ----------------------------------
// PASTE SHOPPING CART QUERY HERE
// > db.users.updateMany({}, {$set: {shoppingCart:[] }})
// PASTE LIST PRODUCTS QUERY HERE
// > db.products.find().pretty()
// PASTE CATEGORY PRODUCTS QUERY HERE
// > db.products.find({category:"Dairy"}).pretty()
// PASTE DELETE PRODUCT QUERY HERE
// > db.products.deleteOne({name:"Water Bottle"})
// PASTE REVIEW QUERY HERE
// > db.products.updateOne(
// ... {name: 'Snacks'} ,
// ... {$push: {reviews: {
// ...       "name": "Shannon",
// ...       "comment": "This is so warm and comfortable.",
// ...       "stars": 2,
// ...       "date": "2016-11-10T18:28:09.369Z"
// ...     }
// ... }})
