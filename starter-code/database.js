const MongoDB = require('mongodb');
//const gradient = require('gradient-string');

const users = 'users';
const products = 'products';
const shoppingCarts = 'shoppingCarts';

class Database {

  constructor({ host, database }) {
    this.url = `mongodb://${host}/${database}`;
  }

  connect(callback = (error, database) => {}){
    if (this.database){
      callback(null, this.database);
    } else {
      MongoDB.MongoClient.connect(this.url, (error, database) => {
        if (error){
          callback(error);
        } else {
          this.database = database;
          callback(null, this.database);
        }
      });
    }
  }

  close(callback = (error) => {}){
    if (this.database){
      this.database.close(true, callback);
    } else {
      callback();
    }
  }
  // Insert a user
  // user is the object to insert into the collection
  // callback has two arguments error and result
  insertUser(user, callback = (error, result) => {}){
    this.connect((error, database) => {
      if (error){
        callback(error);
      } else {
        database.collection('users').insertOne(user,callback);


      }
    });
  }

  listUsers(callback = (error, users) => {}) {
    this.connect((error, database) => {
      if (error){
        callback(error);
      } else {

        database.collection('users').find().toArray(function(error, users){
          // docs.forEach(function(obj){
          //   console.log(obj.firstName + " " + obj.lastName);
          // });
          callback(error, users);
        });
      }
    });
  }

  deleteUser( firstName, callback = (error, result) => {}) {
    this.connect((error, database) => {
      if (error){
        callback(error);
      } else {

        database.collection('users').deleteOne({"firstName":firstName}, callback);

      }
    });
  }

  insertProduct(product, callback = (error, result) => {}){
    this.connect((error, database) => {
      if (error){
        callback(error);
      } else {
        database.collection('products').insertOne(product,callback);
      }
    });
  }

  listProducts(callback = (error, products) => {}) {
    this.connect((error, database) => {
      if (error){
        callback(error);
      } else {
        database.collection('products').find().toArray(function(error, products){
          callback(error, products);
        });

      }
    });
  }

  deleteProduct( productName, callback = (error, result) => {}) {
    this.connect((error, database) => {
      if (error){
        callback(error);
      } else {
      database.collection('products').deleteOne({"productName":productName}, callback);
      }
    });
  }

  addProductToShoppingCart({userFirstName, productName}, callback = (error) => {}){
    this.connect((error, database) => {
      if (error) {
        callback(error);
      } else {

        database.collection('users').updateOne({"firstName":userFirstName},
        {$push:{"shoppingCart":productName}}
      );
      callback(error);

      }
    });
  }

  addReviewToProduct( {productName, review}, callback = (messageResult) => {}){
    this.connect((error, database) => {
      if (error) {
        callback(error)
      } else {
        database.collection('products').updateOne({"products":productName},
        {$push:{"review":review}}
      );
      callback(error);
      }


    });
  }
}




module.exports = Database;
