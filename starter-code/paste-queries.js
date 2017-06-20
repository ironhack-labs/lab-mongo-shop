// 1.2 | Insert our first users in users collection
// ------------------------------------------------
// PASTE 3 USER INSERT QUERIES HERE
db.users.insertOne(
  {
    firstName: "John",
    lastName: "Smith",
    dateBirth: ISODate("2016-12-10T18:28:09.369Z"),
    address: {
    streetAddress: "21 2nd Street",
    city: "New York",
    state: "NY",
    postalCode: "10021"
  },
});

db.users.insertOne(
  {
    firstName: "Lauren",
    lastName: "Little",
    dateBirth: new Date("1988-09-16"),
    address: {
    streetAddress: "120 SW 8th St",
    city: "Miami",
    state: "FL",
    postalCode: "33130"
  }
});

db.users.insertOne(
  {
    firstName: "Gabriela",
    lastName: "Parra",
    dateBirth: new Date("1993-04-01"),
    address: {
    streetAddress: "120 SW 8th St",
    city: "Miami",
    state: "FL",
    postalCode: "33130"
  }
});

// 1.3 | Insert our first products in products collection
// ------------------------------------------------------
// PASTE 3 PRODUCT INSERT QUERIES HERE
db.products.insertOne(
  {
  name: "Water Bottle",
  description: "High quality glass bottle provides a healthier way to drink.  Silicone sleeve provides a good grip, a see-through window, and protects the glass vessel.  Eliminates toxic leaching that plastic can cause.  Innovative design holds 22-1/2 ounces.  Dishwasher safe",
  category: "Kitchen",
  price: 23.0
  }
);

db.products.insertOne(
  {
    name: "Phone Case",
    description: "High quality silicon case, guaranteed to prevent from water damage and screen shattering.",
    category: "Phone Accessories",
    price: 20
  }
);

db.products.insertOne(
  {
    name: "Notebook",
    description: "Minimalist notebook, 100 pages of high quality recycled paper.",
    category: "Office Supplies",
    price: 15
  }
);

db.products.insertOne(
{
  name: "Pen",
  description: "Ink Joy Gel pen, black, doesn't smear",
  category: "Office Supplies",
  price: 2
}
);

// 1.4 | Getting Started with queries
// ----------------------------------
// PASTE SHOPPING CART QUERY HERE
db.users.find(
  { firstName: "Lauren" },
  { shoppingCart: 1, _id: 0 }
);

// PASTE LIST PRODUCTS QUERY HERE
db.products.find();

// PASTE CATEGORY PRODUCTS QUERY HERE
db.products.find(
  { category: "Office Supplies" }
);

// PASTE DELETE PRODUCT QUERY HERE
db.products.deleteOne(
  { name: "Notebook" }
);

// PASTE REVIEW QUERY HERE
db.products.updateOne(
  { name: "Pen" },
  { $set: {
            name: "Bob",
            comment: "I love this Pen.",
            stars: 5,
            date: new Date("2017-06-20"),
          }
  }
);
