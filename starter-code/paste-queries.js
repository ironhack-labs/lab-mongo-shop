// open mongo through terminal
//entered: show db to confirm that I don't have myShop in the database already
//Confirmed I didn't so I entered use myShop. Created new database called myShop.

// 1.2 | Insert our first users in users collection
// ------------------------------------------------
// PASTE 3 USER INSERT QUERIES HERE
db.users.insertMany(
    [{
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
            "firstName": "Jessica",
            "lastName": "Adams",
            "dateBirth": ISODate("2016-15-10T18:28:09.369Z"),
            "address": {
                "streetAddress": "2343 7nd Street",
                "city": "Miami",
                "state": "FL",
                "postalCode": "33014"
            }
        },
        {
            "firstName": "Juan",
            "lastName": "Duque",
            "dateBirth": ISODate("2017-12-10T18:28:09.369Z"),
            "address": {
                "streetAddress": "21 2nd Street",
                "city": "New York",
                "state": "NY",
                "postalCode": "10021"
            }
        },
        {
            "firstName": "Peter",
            "lastName": "Doe",
            "dateBirth": ISODate("2014-17-10T18:28:09.369Z"),
            "address": {
                "streetAddress": "27 Jump Street",
                "city": "Queens",
                "state": "NY",
                "postalCode": "10029"
            }
        },
        {
            "firstName": "Bob",
            "lastName": "Danger",
            "dateBirth": ISODate("1989-12-10T18:28:09.369Z"),
            "address": {
                "streetAddress": "1234 5th Street",
                "city": "Delray",
                "state": "FL",
                "postalCode": "33024"
            }
        }
    ]
)
//---To confirm the 5 users were added to the DB I entered db.user.find({})
//-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------//

// 1.3 | Insert our first products in products collection
// ------------------------------------------------------
// PASTE 3 PRODUCT INSERT QUERIES HERE
db.products.insertMany(
    [{
            "name": "Water Bottle",
            "description": "High quality glass bottle provides a healthier way to drink.  Silicone sleeve provides a good grip, a see-through window, and protects the glass vessel.  Eliminates toxic leaching that plastic can cause.  Innovative design holds 22-1/2 ounces.  Dishwasher safe",
            "category": "Non Alcoholic",
            "price": 13.0
        },

        {
            "name": "Vodka Bottle",
            "description": "Health benefits of vodka include better cardiovascular health, reduction in stress quotient, relief from tooth aches and bad breath. Its astringent nature helps in keeping the skin healthy and promotes hair growth.",
            "category": "Liquor",
            "price": 33.0
        },
        {
            "name": "Whiskey Bottle",
            "description": "whiskey is a type of distilled alcoholic beverage made from fermented grain mash. .... Many Irish contended that the new product was, in fact, not whiskey at all.",
            "category": "Bourbon",
            "price": 27.0
        },
        {
            "name": "Tequila Bottle",
            "description": "Tequila is a regionally specific name for a distilled beverage made from the blue agave plant, ... Tequila is recognized as a Mexican designation of origin product in more than 40 countries",
            "category": "Liquor",
            "price": 50.0
        },
        {
            "name": "Aguardiente Bottle",
            "description": "Firewater.Colombian drink.",
            "category": "Black out",
            "price": 15.0
        }
    ]
)
//---To confirm the 5 products were added to the DB I entered db.products.find({})

//-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------//


// 1.4 | Getting Started with queries
// ----------------------------------
// PASTE SHOPPING CART QUERY HERE
db.users.updateMany({}, {
    $set: {
        shoppingCart: []
    }
})
//confirmed that shoppingCart was added to the user array I entered db.user.find({})

db.users.updateOne (
  { firstName : 'Juan'},
  { $push : {'shoppingCart' :
    {
       "name": "Aguardiente Bottle",
       "description":"Firewater.Colombian drink.",
       "category":"Black out",
       "price":15.0
    }

  }
}
)
db.users.updateOne (
{ firstName : 'Jessica'},
{ $push : {'shoppingCart' :
{
"name": "Tequila Bottle",
"description":"Tequila is a regionally specific name for a distilled beverage made from the blue agave plant, ... Tequila is recognized as a Mexican designation of origin product in more than 40 countries",
"category":"Liquor",
"price":50.0
}

}
}
)
//-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------//

// PASTE LIST PRODUCTS QUERY HERE
db.products.find()
//-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------//

// PASTE CATEGORY PRODUCTS QUERY HERE
db.products.find (
  {category : 'Liquor'},
  {"name": 1, _id: 0}
)
//-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------//

// PASTE DELETE PRODUCT QUERY HERE
db.products.deleteOne (
  {name : 'Water Bottle'}
)
//-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------//

// PASTE REVIEW QUERY HERE
db.products.updateOne({name : 'Aguardiente Bottle'},
{ $set: { review : [
   {
     "name": "Shannon",
     "comment": "This is so warm and comfortable.",
     "stars": 2,
     "date": "2016-11-10T18:28:09.369Z"
   }
 ] }
})
