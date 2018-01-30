// 1.2 | Insert our first users in users collection
// ------------------------------------------------



// PASTE 3 USER INSERT QUERIES HERE


// 1.3 | Insert our first products in products collection
// ------------------------------------------------------
// PASTE 3 PRODUCT INSERT QUERIES HERE


// 1.4 | Getting Started with queries
// ----------------------------------
// PASTE SHOPPING CART QUERY HERE

db.users.updateOne(
{"firstName" : "John"},
{$set: {"shoppingCart" : [{ 
  "name": "Water Bottle",
  "description":"High quality glass bottle provides a healthier way to drink.  Silicone sleeve provides a good grip, a see-through window, and protects the glass vessel.  Eliminates toxic leaching that plastic can cause.  Innovative design holds 22-1/2 ounces.  Dishwasher safe",
  "category":"Kitchen",
  "price":23.0
}]}}
)



// PASTE LIST PRODUCTS QUERY HERE


// PASTE CATEGORY PRODUCTS QUERY HERE


// PASTE DELETE PRODUCT QUERY HERE


// PASTE REVIEW QUERY HERE

