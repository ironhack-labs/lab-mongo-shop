// 1.2 | Insert our first users in users collection
// ------------------------------------------------
// PASTE 3 USER INSERT QUERIES HERE

db.users.insertMany([
    {
...   "firstName": "John",
...   "lastName": "Smith",
...   "dateBirth": ISODate("2016-12-10T18:28:09.369Z"),
...   "address": {
...     "streetAddress": "21 2nd Street",
...     "city": "New York",
...     "state": "NY",
...     "postalCode": "10021"
...   }
... },
    {
...   "firstName": "Jane",
...   "lastName": "Doe",
...   "dateBirth": ISODate("2016-12-10T18:28:09.369Z"),
...   "address": {
...     "streetAddress": "50 293rd Street",
...     "city": "Chicago",
...     "state": "Illinois",
...     "postalCode": "60007"
...   }
... },
    {
...   "firstName": "Adel",
...   "lastName": "Acebal",
...   "dateBirth": ISODate("2016-12-10T18:28:09.369Z"),
...   "address": {
...     "streetAddress": "23490 Lincoln Rd",
...     "city": "Miami Beach",
...     "state": "FL",
...     "postalCode": "33139"
...   }
... },
    {
...   "firstName": "Alice",
...   "lastName": "Guan",
...   "dateBirth": ISODate("2016-12-10T18:28:09.369Z"),
...   "address": {
...     "streetAddress": "1 Adventure Blvd",
...     "city": "North Bay Village",
...     "state": "FL",
...     "postalCode": "33152"
...   }
... },
    {
...   "firstName": "Chewbacca",
...   "lastName": "Chew",
...   "dateBirth": ISODate("2016-12-10T18:28:09.369Z"),
...   "address": {
...     "streetAddress": "Some Random Planet",
...     "city": "Wookie",
...     "state": "Tattoine",
...     "postalCode": "00001"
...   }
... },
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
        "name": "Banana",
        "description":"High quality banana provides a healthier way to eat banana.  Silicone sleeve provides a good grip for the banana, a see-through window, and protects the banana.  Eliminates toxic leaching that banana can cause.  Innovative design holds 22-1/2 bananas.  Banana safe",
        "category":"Food",
        "price": 1.00
    },
    {
        "name": "Doge",
        "description":"Such product, doge is doge. Many Shopping. Much Wow.",
        "category":"Animal",
        "price": 699.00
    },
    {
        "name": "Nizar Bobble Head",
        "description":"I won and you didn't. Suck it, but here's your chance for a bobble head and pretend your life is worth something.",
        "category":"Toy",
        "price": 12000.00
    },
    {
        "name": "I Am Building Mug",
        "description":"Don't ask me how I got this.",
        "category":"Kitchen",
        "price": 5.0
    },
])


// 1.4 | Getting Started with queries
// ----------------------------------
// PASTE SHOPPING CART QUERY HERE
db.users.updateMany(
    {},
    { $set: { "shoppingCart": [] } }
)
//PUSH SOME PRODUCTS INTO USER
var banana = db.products.findOne( {name: 'Banana'} )

db.users.updateOne(
    { firstName: 'John' },
    { $push: { 'shoppingCart': banana } }
)

// PASTE LIST PRODUCTS QUERY HERE
db.products.find();

// PASTE CATEGORY PRODUCTS QUERY HERE
db.products.find(
    { 'category': 'Kitchen' },
)

// PASTE DELETE PRODUCT QUERY HERE
db.products.deleteOne(
    {},
)

// PASTE REVIEW QUERY HERE
db.products.updateOne(
    { 'name': 'Banana' },
    { $set: {
        "reviews": [
            {
              "name": "Shannon",
              "comment": "This is so warm and comfortable.",
              "stars": 2,
              "date": "2016-11-10T18:28:09.369Z"
            }
            ]
        }
    }
)
