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
});

db.users.insertMany([
{
    "firstName": "Rodrigo",
        "lastName": "Daou",
            "dateBirth": ISODate("2016-12-10T18:28:09.369Z"),
                "address": {
        "streetAddress": "21 2nd Street",
            "city": "Sao Paulo",
                "state": "Brazil",
                    "postalCode": "10021"
    }
},

{
    "firstName": "Sheng",
        "lastName": "Hu",
            "dateBirth": ISODate("2016-12-10T18:28:09.369Z"),
                "address": {
        "streetAddress": "21 2nd Street",
            "city": "Alicante",
                "state": "Spain",
                    "postalCode": "10021"
    }
}

]);

// 1.3 | Insert our first products in products collection
// ------------------------------------------------------
// PASTE 3 PRODUCT INSERT QUERIES HERE

{
    "name": "Water Bottle",
        "description": "High quality glass bottle provides a healthier way to drink.  Silicone sleeve provides a good grip, a see-through window, and protects the glass vessel.  Eliminates toxic leaching that plastic can cause.  Innovative design holds 22-1/2 ounces.  Dishwasher safe",
            "category": "Kitchen",
                "price": 23.0
}

// 1.4 | Getting Started with queries
// ----------------------------------
// PASTE SHOPPING CART QUERY HERE

db.products.find({}).pretty();
db.products.aggregate();
db.products.remove({ category:'Kitchen'});

// PASTE LIST PRODUCTS QUERY HERE
db.products.find({});


// PASTE CATEGORY PRODUCTS QUERY HERE
db.products.find({category: "Drinks"});

// PASTE DELETE PRODUCT QUERY HERE
db.products.remove({productName});


// PASTE REVIEW QUERY HERE
db.products.insertOne(reviews, {
    name: "Shannon",
    comment: "This is so warm and comfortable.",
    stars: 2,
    date: "2016-11-10T18:28:09.369Z"
});
