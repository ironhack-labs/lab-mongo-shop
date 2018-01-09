const MongoDB = require('mongodb');
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
        // LAB 1
        // Implement the query to insert a user
        database.collection('users').insertOne(user,function(error,result){
          if(error){
            console.log("error inserting user");
          } else {
            console.log("user inserted");
          }
        })
        // user is the document that we want to insert
        // remeber once it's finish to comment callback('Error inserting user');
        //callback('Error inserting user');
      }
    });
  }

  listUsers(callback = (error, users) => {}) {
    this.connect((error, database) => {
      if (error){
        callback(error);
      } else {
        //  LAB 2
        // Implement the query to list the users
        database.collection('users').find({}, function(error,result){
          if(error){
            console.log("error listing users");
          } else {
            console.log("users listed");
          }
        })
        // remeber once it's finish to comment callback('Error listing users');

        //callback('Error listing users');
      }
    });
  }

  deleteUser( firstName, callback = (error, result) => {}) {
    this.connect((error, database) => {
      if (error){
        callback(error);
      } else {
        //  LAB 3
        // Implement the query to delete a user
        database.collection('users').remove({"firstName":firstName},function(error,result){
          if(error){
            console.log("error removing the user");
          } else {
            console.log("user removed");
          }
        })
        // firstName is the name of user that we want to delete
        // remeber once it's finish to comment callback('Error deleting user');

        //callback('Error deleting user');
      }
    });
  }

  insertProduct(product, callback = (error, result) => {}){
    this.connect((error, database) => {
      if (error){
        callback(error);
      } else {
        // LAB 4
        // Implement the query to insert a product
        database.collection('products').insertOne(product,function(error,result){
          if(error){
            console.log("error inserting product");
          } else {
            console.log("product inserted");
          }
        })
        // product is the document to insert
        // remeber once it's finish to comment callback('Error inserting product');

      //  callback('Error inserting product');
      }
    });
  }

  listProducts(callback = (error, products) => {}) {
    this.connect((error, database) => {
      if (error){
        callback(error);
      } else {
        // LAB 5
        // Implement the query to list all products
        database.collection('products').find({}, function(error,result){
          if(error){
            console.log("error listing products");
          } else {
            console.log("products listed");
          }
        })
        // remeber once it's finish to comment callback('Error listing products');

        //callback('Error listing products');
      }
    });
  }

  deleteProduct( productName, callback = (error, result) => {}) {
    this.connect((error, database) => {
      if (error){
        callback(error);
      } else {
        // LAB 6
        // Implement the query to delete a product
        database.collection('products').remove({"productName":productName},function(error,result){
          if(error){
            console.log("error removing the product");
          } else {
            console.log("product removed");
          }
        })
        // productName is the name of the producto to delete
        // remeber once it's finish to comment callback('Error deleting product');

        //callback('Error deleting product');
      }
    });
  }

  addProductToShoppingCart({userFirstName, productName}, callback = (error) => {}){
    this.connect((error, database) => {
      if (error) {
        callback(error);
      } else {
        // LAB 7
        // Implement the query to buy a product
        // userFirstName is the name of user who purchase the product
        // productName is the name of the product that we want to buy
        // Think if you may need to implement two queries chained

             this.database.collection('products').findOne({'name':productName},(error,product)=>{
               if(error){
                 callback(error);
               }else if(!product){
                 console.log ("Product Not Found");
                 callback(error);
               }else{
                 this.database.collection('users').updateOne({'firstName':userFirstName},{$push:{'shoppingCart':product._id}},callback);
               }
             });
           }
         });
        // remeber once it's finish to comment callback('Error buying product');

        //callback('Error buying product');
      }
    });
  }

  addReviewToProduct( {productName, review}, callback = (messageResult) => {}){
    this.connect((error, database) => {
      if (error) {
        callback(error)
      } else {
        // LAB 8
        // Implement the query to review a product
        // productName is the name of the product to review
        // review is the document to insert
        this.database.collection('products').findOne({'name':productName},(error,product)=>{
          if(error){
            callback(error);
          }else if(!product){
            console.log ("Product Not Found");
            callback(error);
          }else{
            this.database.collection('users').updateOne({$push:{'reviews':review}},callback);
          }
        });
       }
       });


        // remeber once it's finish to comment callback('Error reviewing product');

        //callback('Error reviewing product');
      }
    });
  }
}

module.exports = Database;
