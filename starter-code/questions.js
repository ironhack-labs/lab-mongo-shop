const readline = require('readline');


class Questions {
	constructor(){
		this.rl = readline.createInterface({
  		input: process.stdin,
  		output: process.stdout
		});
	}

	showMainMenu(){
		console.log(`
******************************************
* 1.- Users                              *
* 2.- Products                           *
* 3.- Buy a product                      *
* 4.- Write a review                     *
* 0.- exit                               *
******************************************
	`);
	}

	showUserMenu(){
		console.log(`
*******************************
* 1.- Insert a User           *
* 2.- List all User           *
* 3.- Delete a User           * 
* 0.- Back                    *
*******************************
	`);
	}

	showProductMenu(){
		console.log(`
*******************************
* 1.- Insert a Product        *
* 2.- List all Products.      *
* 3.- Delete a Product        *
* 0.- Back                    *
*******************************             
		`);
	}

	typeAnOption(callback = (option) => {}) {
		this.rl.question('Type an option: ', (option) => {
			callback(option);
		});
	}

	continue(callback = () => {}) {
		this.rl.question('press enter to return: ', (answer) => {
			callback()
		});
	}

	askingInsertUser(callback = (user) => {} ){
		this.rl.question('Type a first name: ', (firstName) => {
			this.rl.question('Type a last name: ', (lastName) => {
				this.rl.question('Type a street: ', (street) => {
					this.rl.question('Type a city: ', (city) => {
						this.rl.question('Type a state: ', (state) => {
							this.rl.question('type a postalCode: ', (postalCode) => {
								const user = { 
										firstName, 
										lastName, 
										dateBirth: new Date(), 
										address: { street, city, state, postalCode } 
									};
								callback(user);
							})
						})
					})
				})
			})
		})
	}

	askingForDeleteUser(callback = (answer) => {} ){
		this.rl.question('Type the name of the user: ', (answer) => {
			callback(answer);
		});
	}

	askingInsertProduct(callback = (product) => {} ){
		this.rl.question('Type a name: ', (name) => {
			this.rl.question('Type a description: ', (description) => {
				this.rl.question('Type a price: ', (price) => {
					this.rl.question('Type a category: ', (category) => {					
						const product = { 
								name, 
								description, 
								price: parseFloat(price), 
								category: category, 
							};
						callback(product);
					})
				})
			})
		})
	}

	askingForDeleteProduct(callback = (answer) => {} ){
		this.rl.question('Type the name of the product: ', (answer) => {
			callback(answer);
		});
	}

	askingBuyProduct(callback = (user, product) => {}){
		this.rl.question('Who is the buyer?: ', (user) => {
			this.rl.question('Product that you want to buy: ', (product) => {
				callback(user, product);
			});
		});
	}

	askingWriteReview(callback = (product, review) => {}){
		this.rl.question('Name of the product to review: ', (product) =>{
			this.rl.question('Write a name: ', (name) => {
				this.rl.question('Write a comment: ', (comment) => {
					this.rl.question('Choose between 1-5: ', (stars) => {
						let review = {name, comment, stars, date: new Date()};
						callback(product, review);
					});
				});
			});	
		});
		
	}
}

module.exports = Questions;