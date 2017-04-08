// 1.2 | Insert our first users in users collection
// ------------------------------------------------
// PASTE 3 USER INSERT QUERIES HERE
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
	"shoppingCart": []
},
{
	"firstName": "Nick",
	"lastName": "Jones",
	"dateBirth": ISODate("2016-11-10T18:28:09.369Z"),
	"address": {
	 "streetAddress": "21 2nd Street",
	 "city": "New York",
	 "state": "NY",
	 "postalCode": "10021"
	},
	"shoppingCart": []
},
{
	"firstName": "James",
	"lastName": "Brown",
	"dateBirth": ISODate("2016-09-10T18:28:09.369Z"),
	"address": {
	 "streetAddress": "21 2nd Street",
	 "city": "New York",
	 "state": "NY",
	 "postalCode": "10021"
	},
	"shoppingCart": []
}


// 1.3 | Insert our first products in products collection
// ------------------------------------------------------
// PASTE 3 PRODUCT INSERT QUERIES HERE
db.products.insertMany([
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
},
{
   "name": "XBox1",
   "description":"A cool game console by Microsoft",
   "category":"Gaming",
   "reviews": [
    {
      "name": "Nick",
      "comment": "It saved my life",
      "stars": 5,
      "date": "2016-08-10T18:28:09.369Z"
    },

   ],
   "price":200.0
 },
 {
    "name": "PS4",
    "description":"A cool game console by Sony",
    "category":"Gaming",
    "reviews": [
     {
       "name": "Nizar",
       "comment": "Best system ever",
       "stars": 4,
       "date": "2016-09-10T18:28:09.369Z"
     },

    ],
    "price":300.0
  },
  {
     "name": "Wii",
     "description":"A cool game console by Nintendo",
     "category":"Gaming",
     "reviews": [
      {
        "name": "Josh",
        "comment": "Not fun anymore, gave it away",
        "stars": 1,
        "date": "2016-10-10T18:28:09.369Z"
      },

     ],
     "price":200.0
   }])

// 1.4 | Getting Started with queries
// ----------------------------------
// PASTE SHOPPING CART QUERY HERE
db.users.updateOne(
... {},
... {$set:{'shoppingcart':[]}})



// PASTE LIST PRODUCTS QUERY HERE
db.products2.find({},{name:1,_id:0})
{ "name" : "WiredTiger T-shirt" }
{ "name" : "XBox1" }
{ "name" : "PS4" }
{ "name" : "Wii" }


// PASTE CATEGORY PRODUCTS QUERY HERE
db.products2.find({},{category:1,_id:0})
{ "category" : "Apparel" }
{ "category" : "Gaming" }
{ "category" : "Gaming" }
{ "category" : "Gaming" }

> db.products2.find({category:'Gaming'},{name:1,_id:0})
{ "name" : "XBox1" }
{ "name" : "PS4" }
{ "name" : "Wii" }



// PASTE DELETE PRODUCT QUERY HERE
> db.products2.find({category:'Gaming'},{name:1,_id:0})
{ "name" : "XBox1" }
{ "name" : "PS4" }
{ "name" : "Wii" }
> db.products2.deleteOne({category:'Gaming'},{name:1,_id:0})
{ "acknowledged" : true, "deletedCount" : 1 }
> db.products2.find({category:'Gaming'},{name:1,_id:0})
{ "name" : "PS4" }
{ "name" : "Wii" }


// PASTE REVIEW QUERY HERE
> db.products2.find({},{_id:0,name:1,'reviews.comment':1})
{ "name" : "WiredTiger T-shirt", "reviews" : [ { "comment" : "This is so warm and comfortable." }, { "comment" : "This is so warm and comfortable." } ] }
{ "name" : "PS4", "reviews" : [ { "comment" : "Best system ever" } ] }
{ "name" : "Wii" }
