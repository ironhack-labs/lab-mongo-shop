// 1.2 | Insert our first users in users collection
db.users.insertOne({"firstName": "John",
... ...  "lastName": "Smith",
... ...   "dateBirth": ISODate("2016-12-10T18:28:09.369Z"),
... ...   "address": {
... ...     "streetAddress": "21 2nd Street",
... ...     "city": "New York",
... ...     "state": "NY",
... ...     "postalCode": "10021"
... ...   }})
{
	"acknowledged" : true,
	"insertedId" : ObjectId("58e9486f9c93496978c80d92")

// PASTE 5 USER INSERT QUERIES HERE

db.users.insertOne({"firstName": "Ramon",
... ...   "lastName": "Peter",
... ...   "dateBirth": ISODate(),
... ...   "address": {
... ...     "streetAddress": "22 3nd Ave",
... ...     "city": "York",
... ...     "state": "YN",
... ...     "postalCode": "21221"
... ...   }})
{
	"acknowledged" : true,
	"insertedId" : ObjectId("58e945239c93496978c80d8e")

//NO UP

  db.users.insertMany( [
  {"firstName": "Rana","lastName": "Perry","dateBirth": ISODate(),"address":
  {  "streetAddress": "25 39nd Ave",  "city": "Ying",  "state": "MA",  "postalCode": "21331"}},

  {"firstName": "Ran","lastName": "Pong","dateBirth": ISODate(),"address":
  {  "streetAddress": "28 31nd Ave",  "city": "Yang",  "state": "LA",  "postalCode": "33016"}},

  {"firstName": "Rain","lastName": "Ping","dateBirth": ISODate(),"address":
  {  "streetAddress": "29 32nd Ave",  "city": "Yong",  "state": "FL",  "postalCode": "33014"}}
  ])

  "acknowledged" : true,
  	"insertedIds" : [
  		ObjectId("58e946e09c93496978c80d8f"),
  		ObjectId("58e946e09c93496978c80d90"),
  		ObjectId("58e946e09c93496978c80d91")
  	]
  }


db.users.remove( [
  { _id : ObjectId("58e949ab9c93496978c80d93") }
])

{ _id : ObjectId("58e949ab9c93496978c80d94") },
{ _id : ObjectId("58e949ab9c93496978c80d95") },
{ _id : ObjectId("58e949ab9c93496978c80d96") },
{ _id : ObjectId("58e949ab9c93496978c80d97") }
// 1.3 | Insert our first products in products collection
// ------------------------------------------------------
// PASTE 3 PRODUCT INSERT QUERIES HERE
db.products.insertMany( [
  {
     "name": "Water Bottle",
     "description":"High quality glass bottle provides a healthier way to drink.  Silicone sleeve provides a good grip, a see-through window, and protects the glass vessel.  Eliminates toxic leaching that plastic can cause.  Innovative design holds 22-1/2 ounces.  Dishwasher safe",
     "category":"Kitchen",
     "price":23.0
  },
  {
     "name": "Botle",
     "description":"Lorem ipsum dolor sit amet, erat imperdiet cum at, qui eu omnis nonumes constituto. Ex aliquip phaedrum quo, duo ex viris eruditi luptatum. Natum discere.",
     "category":"Bathroom",
     "price":3.0
  },
  {
     "name": "Juice  Bottle",
     "description":"Lorem ipsum dolor sit amet, at cibo principes urbanitas his, pri et dolor dolores. Etiam adolescens ne sea, has ex nobis gubergren quaerendum. Cu eum.",
     "category":"Yard",
     "price":93.0
  },
  {
     "name": "Beer Bottle",
     "description":"Lorem ipsum dolor sit amet, soleat putant abhorreant mei et, nec cu solum mediocrem reprehendunt. Mei at possit oblique similique. Iusto consetetur theophrastus vim ad.",
     "category":"Bar",
     "price":33.0
  },
  {
     "name": "Watottle",
     "description":"Lorem ipsum dolor sit amet, eam ex exerci dolores tacimates, ex mea suas utamur explicari. Hinc falli eligendi vix ea, ut est quodsi fierent augue.",
     "category":"Jungle",
     "price":31.0
  }])

  "acknowledged" : true,
"insertedIds" : [
  ObjectId("58e9503420417a495f8b756b"),
  ObjectId("58e9503420417a495f8b756c"),
  ObjectId("58e9503420417a495f8b756d"),
  ObjectId("58e9503420417a495f8b756e"),
  ObjectId("58e9503420417a495f8b756f")
]
}


// 1.4 | Getting Started with queries
// ----------------------------------
// PASTE SHOPPING CART QUERY HERE
> db.users.find({}, {firstName: 1, shoppingCart: 1})
{ "_id" : ObjectId("58e945239c93496978c80d8e"), "firstName" : "Ramon", "shoppingCart" : "" }
{ "_id" : ObjectId("58e946e09c93496978c80d8f"), "firstName" : "Rana", "shoppingCart" : "" }
{ "_id" : ObjectId("58e946e09c93496978c80d90"), "firstName" : "Ran", "shoppingCart" : "" }
{ "_id" : ObjectId("58e946e09c93496978c80d91"), "firstName" : "Rain", "shoppingCart" : "" }
{ "_id" : ObjectId("58e9486f9c93496978c80d92"), "firstName" : "John", "shoppingCart" : "" }
>


// PASTE LIST PRODUCTS QUERY HERE
> db.products.find({}, {name: 1} )
{ "_id" : ObjectId("58e9503420417a495f8b756b"), "name" : "Water Bottle" }
{ "_id" : ObjectId("58e9503420417a495f8b756c"), "name" : "Botle" }
{ "_id" : ObjectId("58e9503420417a495f8b756d"), "name" : "Juice  Bottle" }
{ "_id" : ObjectId("58e9503420417a495f8b756e"), "name" : "Beer Bottle" }
{ "_id" : ObjectId("58e9503420417a495f8b756f"), "name" : "Watottle" }
>

// PASTE CATEGORY PRODUCTS QUERY HERE
> db.products.find({category: "Kitchen"})
{ "_id" : ObjectId("58e9503420417a495f8b756b"), "name" : "Water Bottle", "description" : "High quality glass bottle provides a healthier way to drink.  Silicone sleeve provides a good grip, a see-through window, and protects the glass vessel.  Eliminates toxic leaching that plastic can cause.  Innovative design holds 22-1/2 ounces.  Dishwasher safe", "category" : "Kitchen", "price" : 23 }
>

// PASTE DELETE PRODUCT QUERY HERE
> db.products.deleteOne( {name:"Watottle"})
{ "acknowledged" : true, "deletedCount" : 1 }
>

// PASTE REVIEW QUERY HERE

> db.products.updateOne({}, { $set: {'reviews':[
...     {
...       "name": "Shannon",
...       "comment": "This is so warm and comfortable.",
...       "stars": 2,
...       "date": "2016-11-10T18:28:09.369Z"
...     }
...   ]}} )
{ "acknowledged" : true, "matchedCount" : 1, "modifiedCount" : 1 }
>


> db.products.find({})
{ "_id" : ObjectId("58e9503420417a495f8b756b"), "name" : "Water Bottle", "description" : "High quality glass bottle provides a healthier way to drink.  Silicone sleeve provides a good grip, a see-through window, and protects the glass vessel.  Eliminates toxic leaching that plastic can cause.  Innovative design holds 22-1/2 ounces.  Dishwasher safe", "category" : "Kitchen", "price" : 23, "reviews" : [ { "name" : "Shannon", "comment" : "This is so warm and comfortable.", "stars" : 2, "date" : "2016-11-10T18:28:09.369Z" } ] }
{ "_id" : ObjectId("58e9503420417a495f8b756c"), "name" : "Botle", "description" : "Lorem ipsum dolor sit amet, erat imperdiet cum at, qui eu omnis nonumes constituto. Ex aliquip phaedrum quo, duo ex viris eruditi luptatum. Natum discere.", "category" : "Bathroom", "price" : 3 }
{ "_id" : ObjectId("58e9503420417a495f8b756d"), "name" : "Juice  Bottle", "description" : "Lorem ipsum dolor sit amet, at cibo principes urbanitas his, pri et dolor dolores. Etiam adolescens ne sea, has ex nobis gubergren quaerendum. Cu eum.", "category" : "Yard", "price" : 93 }
{ "_id" : ObjectId("58e9503420417a495f8b756e"), "name" : "Beer Bottle", "description" : "Lorem ipsum dolor sit amet, soleat putant abhorreant mei et, nec cu solum mediocrem reprehendunt. Mei at possit oblique similique. Iusto consetetur theophrastus vim ad.", "category" : "Bar", "price" : 33 }
>
