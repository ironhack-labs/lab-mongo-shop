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
})
db.users.insertOne({
  "firstName": "Marcos",
  "lastName": "Palacios",
  "dateBirth": ISODate("1982-15-07T18:28:09.369Z"),
  "address": {
    "streetAddress": "6231 Mayo St",
    "city": "Hollywood",
    "state": "FL",
    "postalCode": "33023"
  }
})
db.users.insertOne({
  "firstName": "Imran",
  "lastName": "Syed",
  "dateBirth": ISODate("1988-25-12T18:28:09.369Z"),
  "address": {
    "streetAddress": "19 Chesnut Circle",
    "city": "Cooper City",
    "state": "FL",
    "postalCode": "33038"
  }
})

// 1.3 | Insert our first products in products collection
// ------------------------------------------------------
// PASTE 3 PRODUCT INSERT QUERIES HERE
db.products.insertOne({
   "name": "Water Bottle",
   "description":"High quality glass bottle provides a healthier way to drink.  Silicone sleeve provides a good grip, a see-through window, and protects the glass vessel.  Eliminates toxic leaching that plastic can cause.  Innovative design holds 22-1/2 ounces.  Dishwasher safe",
   "category":"Kitchen",
   "price":23.0
})

db.products.insertOne({
   "name": "Star Wars Branding Toaster",
   "description":"I've toasted your bread, pray I don't toast it any further. Enjoy saying this and other Darth Vader-isms every morning with this Darth Vader Toaster. Its casing is an accurate replica of Darth Vader's chest plate, and when the toast pops up, it has his helmet toasted into the center. Housing and Vader chest plate made of polypropylene plastic, interior made of stamped aluminum.",
   "category":"Kitchen",
   "price":33.99
})

db.products.insertOne({
   "name": "HP Wireless Printer with Extra's",
   "description":"[HP_logo.Jpg] category: Printers, inkjet, multi-function-color manufacturer: Hewlett Packard hardware - Hewlett Packard company part number: F1j03a#b1h upc: 889296269809 accomplish next-level productivity with the easiest way to print from your smartphone or tablet. Fly through tasks with an all-in-one with fax, automatic document feeder, and wireless and save up to 50% on ink with the HP instant ink program. Get high-quality prints, time after time, with an all-in-one designed and built to be reliable. Save your space with a sleek all-in-one designed to fit where you need it. Print in any room you choose without causing disruptions using the optional quiet mode.",
   "category":"Office",
   "price":69.99
})

// 1.4 | Getting Started with queries
// ----------------------------------
// PASTE SHOPPING CART QUERY HERE
db.users.updateOne (
  { firstName: "John" },
  {
    $set: {
    shoppingCart: [
      ObjectId("5a020779c6e20288e016ccce"),
      ObjectId("5a0208c8c6e20288e016cccf")
    ]
    }
  }
)

db.users.updateOne (
  { firstName: "Marcos" },
  {
    $set: {
    shoppingCart: [
      ObjectId("5a0208c8c6e20288e016cccf")
    ]
    }
  }
)

db.users.updateOne (
  { firstName: "Imran" },
  {
    $set: {
    shoppingCart: [
      ObjectId("5a020779c6e20288e016ccce")
    ]
    }
  }
)

// PASTE LIST PRODUCTS QUERY HERE
db.products.find().pretty()

// PASTE CATEGORY PRODUCTS QUERY HERE
db.products.find(
  { category: "Kitchen"}
).pretty()

// PASTE DELETE PRODUCT QUERY HERE
db.deleteOne(
  { _id: ObjectId("5a0208c8c6e20288e016cccf")}
)

// PASTE REVIEW QUERY HERE
db.products.updateOne(
  { name: "Water Bottle"},
  {
    $set: {
      review: [{
        name: "Imran",
        comment: "This water bottle was pretty awesome!!",
        stars: 5,
        date: "2016-11-10T18:28:09.369Z"
      }]
    }
  }
)
