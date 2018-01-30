// 1.2 | Insert our first users in users collection
// ------------------------------------------------
// PASTE 3 USER INSERT QUERIES HERE
> db.users.insertOne({
    ...   "firstName": "John",
    ...   "lastName": "Smith",
    ...   "dateBirth": ISODate("2016-12-10T18:28:09.369Z"),
    ...   "address": {
    ...     "streetAddress": "21 2nd Street",
    ...     "city": "New York",
    ...     "state": "NY",
    ...     "postalCode": "10021"
    ...   }
    ... }
    ... )
    {
        "acknowledged" : true,
        "insertedId" : ObjectId("5a709c4611c2a1a31a3b1b70")
    }
    > db.users.insertMany([{
        ...   "firstName": "Jorge",
        ...   "lastName": "Gonzalez",
        ...   "dateBirth": ISODate("1989-05-0618:28:09.369Z"),
        ...   "address": {
        ...     "streetAddress": "Fake Street",
        ...     "city": "Madrid",
        ...     "state": "Madrid",
        ...     "postalCode": "10021"
        ...   }
        ... }
        ... ,
        ... {
        ...   "firstName": "Rober",
        ...   "lastName": "Estrada",
        ...   "dateBirth": ISODate("1976-04-16T18:28:09.369Z"),
        ...   "address": {
        ...     "streetAddress": "Not a Real Street",
        ...     "city": "Madrid",
        ...     "state": "Madrid",
        ...     "postalCode": "10021"
        ...   }
        ... }]
        ... )
        {
            "acknowledged" : true,
            "insertedIds" : [
                ObjectId("5a709d5e11c2a1a31a3b1b71"),
                ObjectId("5a709d5e11c2a1a31a3b1b72")
            ]
        }

        //inserted the first user with InsertOne, then the next two with insertMany

// 1.3 | Insert our first products in products collection
// ------------------------------------------------------
// PASTE 3 PRODUCT INSERT QUERIES HERE
> db.products.insertOne({
    ...    "name": "Water Bottle",
    ...    "description":"High quality glass bottle provides a healthier way to drink.  Silicone sleeve provides a good grip, a see-through window, and protects the glass vessel.  Eliminates toxic leaching that plastic can cause.  Innovative design holds 22-1/2 ounces.  Dishwasher safe",
    ...    "category":"Kitchen",
    ...    "price":23.0
    ... })
    {
        "acknowledged" : true,
        "insertedId" : ObjectId("5a709e7b298f72e0248276d5")
    }
    > db.products.insertMany([{
        ...    "name": "Iron Potato",
        ...    "description":"Spicy and taste ferrous potatos made with all the flavor of Matadero Madrid",
        ...    "category":"Kitchen",
        ...    "price":9991
        ... }
        ... ,
        ... {
        ...  "name": "Marc's Tupper",
        ...    "description":"Fancy and nice Tupper made with the best quality plastic of market. Can sometimes become invisible",
        ...    "category":"Kitchen",
        ...    "price":42
        ... }]
        ... )
        {
            "acknowledged" : true,
            "insertedIds" : [
                ObjectId("5a709fc1298f72e0248276d6"),
                ObjectId("5a709fc1298f72e0248276d7")
            ]
        }    

// 1.4 | Getting Started with queries
// ----------------------------------
// PASTE SHOPPING CART QUERY HERE
> db.users.updateOne(
    ...   {"firstName" : "Jorge"} , {$set :{"shoppingCart" : [ObjectId("5a709e7b298f72e0248276d5")]}}
    ...   )
    { "acknowledged" : true, "matchedCount" : 1, "modifiedCount" : 1 }
    

// PASTE LIST PRODUCTS QUERY HERE
> db.products.find()
{ "_id" : ObjectId("5a709e7b298f72e0248276d5"), "name" : "Water Bottle", "description" : "High quality glass bottle provides a healthier way to drink.  Silicone sleeve provides a good grip, a see-through window, and protects the glass vessel.  Eliminates toxic leaching that plastic can cause.  Innovative design holds 22-1/2 ounces.  Dishwasher safe", "category" : "Kitchen", "price" : 23 }
{ "_id" : ObjectId("5a709fc1298f72e0248276d6"), "name" : "Iron Potato", "description" : "Spicy and taste ferrous potatos made with all the flavor of Matadero Madrid", "category" : "Kitchen", "price" : 9991 }
{ "_id" : ObjectId("5a709fc1298f72e0248276d7"), "name" : "Marc's Tupper", "description" : "Fancy and nice Tupper made with the best quality plastic of market. Can sometimes become invisible", "category" : "Kitchen", "price" : 42 }


// PASTE CATEGORY PRODUCTS QUERY HERE


// PASTE DELETE PRODUCT QUERY HERE


// PASTE REVIEW QUERY HERE

