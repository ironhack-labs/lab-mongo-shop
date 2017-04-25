![Ironhack Logo](https://i.imgur.com/1QgrNNw.png)

# PP | Mongo Shop

<img src="https://i.imgur.com/IJKRm71.png" width="300px">

## Introduction

We want to build a small database for an e-commerce application.

We interviewed the client and she gave us the following requirements for the application:

- She wants to store products with some information
- She needs to save the client information
- Should be able to look the shopping history of every client
- Products can have a category
- Users can review products and rate them by assigning 1 to 5 stars

With this information, we should be able to get started in modeling our Mongo Database. Ready?

## Modeling the Data

First of all we need identify the entities in order to create our collections.

### Collections

There are differents ways to design the structure. If we come from the world of SQL an approach can be, 4 collections: Users, Products, ShoppingCarts and Reviews. But we are in MongoDB were we can embed documents and we will follow the proposed structure.

- Users
  - ShoppingCarts
- Products
  - Reviews

The structured proposed is 2 collections `users` and `products`, inside the collection `users` we will store the historical purchases.  In the `products` collection we will have the reviews of each product.

Each of these collections will have inside the information that we need to store.

### Data Model

Once we define our collections, we should define what fields the documents inside the collections will have. Once again, there are many different ways of doing this, but for this exercise, we are going to model the database like this:

**Sample User collection**
```javascript
{
  "_id": ObjectId("582e3c59eb1b8eb7be087448"),
  "firstName": "John",
  "lastName": "Smith",
  "dateBirth": ISODate("2016-12-10T18:28:09.369Z"),
  "address": {
   "streetAddress": "21 2nd Street",
   "city": "New York",
   "state": "NY",
   "postalCode": "10021"
  },
  "shoppingCart": [
    ObjectId("582e3dd006a0c0b81841f47e"),
    ObjectId("582e3cc7b03b5db7dd616cc8")
  ]
}
```

**Sample Products Collection**

```javascript
{
  "_id": ObjectId("582e3dd006a0c0b81841f47e"),
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
    }],
  "price":12.0
}
```

## PART 1 | CRUD in MongoShell

### 1.1 | Create a database name

The first step to start the exercise is to create our own database. Let's call it `myShop`:

```
$ mongo
MongoDB shell version: 3.2.11
connecting to: test

> use myShop
switched to db myShop
```

### 1.2 | Insert our first users in `users` collection

Insert this user in the `users` collection:

```javascript
{
  "firstName": "John",
  "lastName": "Smith",
  "dateBirth": ISODate("2016-12-10T18:28:09.369Z"),
  "address": {
    "streetAddress": "21 2nd Street",
    "city": "New York",
    "state": "NY",
    "postalCode": "10021"
  }
}
```

After you insert it, don't forget to check that the user is inserted correctly and add yourselves as users in the collection too!

### 1.3 | Insert our first products in `products` collection

Now let's add a product to our `products` collection:

```javascript
{
   "name": "Water Bottle",
   "description":"High quality glass bottle provides a healthier way to drink.  Silicone sleeve provides a good grip, a see-through window, and protects the glass vessel.  Eliminates toxic leaching that plastic can cause.  Innovative design holds 22-1/2 ounces.  Dishwasher safe",
   "category":"Kitchen",
   "price":23.0
}
```

Dont' forget to check that the product is inserted correctly and insert a product for each of you :)

### 1.4 | Getting Started with queries

1. Create a purchase with some products for the user.
   > Remember that purchases are the elements inside the  `"shoppingCart"` array property of a `user`.

2. List all `products`
3. List all `products` with the same `category`
4. Delete a `product`
5. Write a review for one product


```javascript
"reviews": [
    {
      "name": "Shannon",
      "comment": "This is so warm and comfortable.",
      "stars": 2,
      "date": "2016-11-10T18:28:09.369Z"
    }
  ]
```


## Welcome the NodeJS driver


![](https://i.imgur.com/eS8Mlzb.png)

Until now we played with MongoShell, In Part 2 let's play with [MongoDB Driver for NodeJS](https://mongodb.github.io/node-mongodb-native/).


#### Connecting to Mongo Database
To make the connection between NodeJS and MongoDB we use the MongoDB Driver, which is a package we need to install:

```shell
$ npm install mongodb --save
```

The code below is a basic script to connect to your local MongoDB.

```javascript
const MongoClient = require('mongodb').MongoClient;

const dbServer = 'localhost';
const dbPort   = '27017';
const dbName   = 'ironhackshop';
const connectionURL = `mongodb://${dbServer}:${dbPort}/${dbName}`;

// Use connect method to connect to the server
MongoClient.connect(connectionURL, function(error, db) {
  if(error) { console.log("Error connecting to server", error); return;}

  console.log("Connected successfully to server")

  // Make your queries here   

  db.close();
});
```

First we are importing `MongoClient` from `mongodb`, that is the driver package for NodeJS.

We use `MongoClient.connect()` to establish the connection to MongoDB. Connect recieves two argumments, one is the database's URL, and the other is a callback that will be called when the connection to the Database is available.

This callback will have two parameters:

- `error`, if there are any problems
- `db`: the database object we will use to perform queries

### How to perform queries in NodeJS

In order to perform queries with the driver, we need to use the `db` object returned in the connection callback.

The `db` object has a method `db.collection()` that allows us to performa a [find query](http://mongodb.github.io/node-mongodb-native/2.2/api/Collection.html#find) on that collection.

```javascript
db.collection('products').find().toArray((error, products) => {
    assert.equal(error, null);
    console.log('All Products: ', products)
})
```

We can invoke `collection('<collectionName>')` method to perform queries on a particular collection.

Over collection we can apply almost the same methods that we were applaying in MongoShell, but we strongly recommend check the [documentacion of MongoDB Driver](http://mongodb.github.io/node-mongodb-native/2.2/api/).

**Let's get our hands dirty!!!!**

![](https://media.giphy.com/media/9DkT78OOEFoxG/source.gif)

## PART 2 | CRUD in NodeJS driver

### Lab 0 | Setup Repository

You are gonna build an e-commerce terminal application.

```shell
$ git clone https://github.com/ironhack/lab-mongo-shop
```
Once you've downloaded the repo, enter in that folder and type:

```javascript
$ cd lab-mongo-shop
$ npm install
$ npm start
```

The project has the following structure

| Folder          | Description
|-----------------|--------
| `/data`         | Folder that contain the json for collections
| `database.js`   | Class to connect to MongoDB Driver
| `questions.js`  | Class to interact through the prompt terminal and ask questions
| `main.js`       | Our main file, where everything starts

Open the project with your editor

### Lab 1 | Insert User

Open `database.js`. This is the file you have to perform the differents queries.

Find the method `insertUser(<user>, callback(error, result))` we call the method `this.connect` and inside his callback, if there is an error we invoke our callback with the error if everything went well we will use `database` object to connect to our DB.

```javascript=
insertUser(user, callback = (error, result) => {}){
  this.connect((error, database) => {
    if (error){
      callback(error);
    } else {
      // LAB 1
      // Implement the query to insert a user
      // remeber once it's finish to comment callback('Error inserting user');

      callback('Error inserting user');
    }
  });
}
```

In line 9 type `database.collection('users').insertOne();`

If we check the documentation [insertOne(doc, options, callback)](http://mongodb.github.io/node-mongodb-native/2.2/api/Collection.html#insertOne)
- `doc` is the document to insert
- `options` we are not gonna use it now
- `callback` is the command result callback.


```javascript=5
...
} else {
  // LAB 1
  // Implement the query to insert a user
  // remeber once it's finish to comment callback('Error inserting user');
  database.collection('users').insertOne(user, callback);
  callback('Error inserting user');
}
...
```

`user` is the document to insert and we are passing callback from `insertOne` invoked inside `insertOne` to our callback in line 1.

We are doing this because, the callback from insertOne has the same signature than our callback (line 1).

Let's try it in our first function:

```javascript
$ npm start
```
Select option 1 > option 1 "User > Insert a user". follow the instructions.

![](https://i.imgur.com/81OQBJn.png)
![](https://i.imgur.com/8zhaeFI.png)

Once is inserted go to MongoShell and see if was inserted correctly.

### Lab Exercises

Perform the different queries, the column Function Name is that you have to finish.

| Lab | Description | Function Name
|-----|-------------|-------
| 1 | Insert a users | `insertUser`
| 2 | List all users | `listUsers`
| 3 | Delete a user | `deleteUser`
| 4 | Insert a product | `insertProduct`
| 5 | List all products | `listProducts`
| 6 | Delete a product | `deleteProduct`
| 7 | Buy a product | `addProductToShoppingCart`
| 8| Make a review | `addReviewToProduct`

// Happy Coding! 😀

## Summary

In this exercise we've practised the basics queries in MongoShell also we've learned how to connect NodeJS through MongoDB Driver to the DB.

## Extra Resources

[Reference API MongoDB Driver](http://mongodb.github.io/node-mongodb-native/2.2/api/)
[MongoDB Driver Website](https://mongodb.github.io/node-mongodb-native/)
[Getting Started](http://mongodb.github.io/node-mongodb-native/2.2/quick-start/)
