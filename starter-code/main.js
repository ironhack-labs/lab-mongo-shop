/*jshint esversion: 6*/
const Database = require('./database');
const Questions = require('./questions');
const clear = require('clear');

const db = new Database({ host: 'localhost:27017', database: 'myShop'});
const questions = new Questions();

function mainMenu(){
	clear();
	questions.showMainMenu();
	questions.typeAnOption((option) => {
		switch(option){
			case "1":
				usersMenu();
				break;
			case "2":
				productMenu();
				break;
			case "3":
				buyProduct();
				break;
			case "4":
				writeReview();
				break;
			case "0":
				console.log(`Bye\n`);
				db.close((error) => {
					process.exit(0);
				})
				break;
			default:
				mainMenu();
				break;
		}
	})
}

// Users
function usersMenu(){
	clear();
	questions.showUserMenu();
	questions.typeAnOption((option) => {
		switch(option){
			case "1":
				insertUser();
				break;
			case "2":
				listUsers();
				break;
			case "3":
				deleteUser();
				break;
			case "0":
				mainMenu();
				break;
			default:
				usersMenu();
				break;
		}
	})
}

function insertUser(){
	questions.askingInsertUser((user) => {
		db.insertUser( user, (error, result)=> {
			if (error) {
				console.log(error);
				questions.continue(() => {
					usersMenu();
				});
			} else {
				console.log('Inserted: ', result.result.n);
				questions.continue(() => {
					usersMenu();
				});
			}
		});
	})
}

function listUsers(){
	db.listUsers((error, users) => {
		if (error) {
			console.log(error);
			questions.continue(() => {
				usersMenu();
			});
		} else {
			console.log('List of users: ');
			users.forEach((user) => {
				console.dir(user);
			});
			questions.continue(() => {
				usersMenu();
			});
		}
	})
}

function deleteUser(){
	questions.askingForDeleteUser((userName) => {
		db.deleteUser( userName, (error, result) => {
			if (error) {
				console.log(error);
				questions.continue(()=>{
					usersMenu();
				});
			} else {
				console.log('Deleted: ', result.result.n);
				questions.continue(()=>{
					usersMenu();
				});
			}
		})
	})
}

// Products
function productMenu(){
	clear();
	questions.showProductMenu();
	questions.typeAnOption((option) => {
		switch(option){
			case "1":
				insertProduct();
				break;
			case "2":
				listProducts();
				break;
			case "3":
				deleteProduct();
				break;
			case "0":
				mainMenu();
				break;
			default:
				productMenu();
				break;
		}
	})
}

function insertProduct(){
	questions.askingInsertProduct((product) => {
		db.insertProduct( product, (error, result) => {
			if (error) {
				console.log(error);
				questions.continue(() => {
					productMenu();
				});
			} else {
				console.log('Inserted: ', result.result.n);
				questions.continue(() => {
					productMenu();
				});
			}
		});
	});
}

function listProducts(){
	db.listProducts((error, products) => {
		if (error) {
			console.log(error);
			questions.continue(() => {
				productMenu();
			});
		} else {
			console.log('List of products: ');
			products.forEach((product) => {
				console.dir(product);
			});
			questions.continue(() => {
				productMenu();
			});
		}
	})
}

function deleteProduct(){
	questions.askingForDeleteProduct((name) => {
		db.deleteProduct( name, (error, result) => {
			if (error) {
				console.log(error);
				questions.continue(()=>{
					productMenu();
				});
			} else {
				console.log('Deleted: ', result.result.n);
				questions.continue(()=>{
					productMenu();
				});
			}
		})
	})
}

function buyProduct(){
	questions.askingBuyProduct((userFirstName, productName) => {
		db.addProductToShoppingCart({userFirstName, productName}, (error) => {
			if (error) {
				console.log(error);
				questions.continue(()=>{
					mainMenu();
				});
			} else {
				console.log('Thanks for your purchase!!');
				questions.continue(()=>{
					mainMenu();
				});
			}
		})
	});
}

function writeReview(){
	questions.askingWriteReview((productName, review) => {
		db.addReviewToProduct({productName, review}, (error) => {
				if (error) {
					console.log(error);
					questions.continue(()=>{
						mainMenu();
					});
				} else {
					console.log('Thanks for your review!!');
					questions.continue(()=>{
						mainMenu();
					});
				}
		});
	});
}

mainMenu();
