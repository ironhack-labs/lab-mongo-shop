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
  insertUser(user, callback = (error, users) => {}){
    this.connect((err, db)=>{
        if(err) return callback(err);
        var users = db.collection("users");
        users.insertOne(user, (err,r)=>{
            if (err) callback(err);
            else console.log("agregado", r.insertedCount);
            callback("ready");
            //db.close;
        });
    });
}

  listUsers(callback = (error, users) => {}) {
    this.connect((err,db)=>{
        if(err) return errorCallback(err);
        var users = db.collection("users");
        users.find().toArray((err,usrs)=>{
            if(err) errorCallback(err);
            console.log("usuarios: ",usrs);
            callback("ready");
            //this.close();
        });
    });
  }

  deleteUser( firstName, callback = (error, result) => {}) {
    this.connect((err, db)=>{
      if(err) return callback(err);
      var users = db.collection("users");
      users.deleteOne({firstName:firstName}, (err, r)=>{
          if (err) callback(err);
          else if(r.result.n < 1) callback("Usuario no encontrado");
          else callback("Deleted", r);
      });
    });
  }

  insertProduct(product, callback = (error, result) => {}){
    this.connect((err, db)=>{
      if(err) return callback(err);
      var products = db.collection("products");
      products.insertOne(product, (err,r)=>{
          if (err) callback(err);
          else console.log("Producto agregado", r.insertedCount);
          callback("ready");
          //db.close;
      });
  });
  }

  listProducts(callback = (error, products) => {}) {
    this.connect((err,db)=>{
      if(err) return errorCallback(err);
      var products = db.collection("products");
      products.find().toArray((err,prds)=>{
          if(err) errorCallback(err);
          console.log("products: ",prds);
          callback("ready");
          //this.close();
      });
  });
  }

  deleteProduct( productName, callback = (error, result) => {}) {
    this.connect((err, db)=>{
      if(err) return callback(err);
      var products = db.collection("products");
      products.deleteOne({name:productName}, (err, r)=>{
          if (err) callback(err);
          else if(r.result.n < 1) callback("Producto no encontrado");
          else callback("Products Deleted: ");
      });
    });
  }

  addProductToShoppingCart({userFirstName, productName}, callback = (error) => {}){
    this.connect((error, db) => {
      if (error) {
        callback(error);
      } else {
       db.collection("products").findOne({name:productName}, (err, product)=>{
         var users = db.collection("users");
         //users.updateOne({firstName:userFirstName}, {$push:{shoppingCart:product}}, (err, res)=>{
          users.updateOne({firstName:userFirstName}, {$push:{shoppingCart:productName}}, (err, res)=>{
           if(err) console.log(err);
          callback(res);
         });
       });
        //var products = db.collection("products");
        
        // LAB 7
        // Implement the query to buy a product
        // userFirstName is the name of user who purchase the product
        // productName is the name of the product that we want to buy
        // Think if you may need to implement two queries chained
        // remeber once it's finish to comment callback('Error buying product');
        
        callback('Error buying product');
      }
    });
  }

  addReviewToProduct( {productName, review}, callback = (messageResult) => {}){
    this.connect((error, db) => {
      if (error) {
        callback(error)
      } else {
        var products = db.collection("products");
        products.updateOne({name:productName}, {$push:{reviews:review}}, (err, res)=>{
        //products.updateOne({name:productName}, {$push:{reviews:JSON.stringify(review)}}, (err, res)=>{

            if(err) console.log(err);
           callback(res);
          });
        // LAB 8
        // Implement the query to review a product
        // productName is the name of the product to review
        // review is the document to insert
        // remeber once it's finish to comment callback('Error reviewing product');
        
        //callback('Error reviewing product');
      }
    });
  }
}

module.exports = Database;