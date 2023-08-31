"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const uuid_1 = require("uuid");
// this function will return an object of type User. It will autogenerate an UUID for the id. It will require name, and age to be passed in as arguments. It will also initialize an empty cart.
function createUser(name, age) {
    return {
        id: (0, uuid_1.v4)(),
        name: name,
        age: age,
        cart: []
    };
}
// this function will return an object of type Item. It will autogenerate an UUID for the id. It will require name, price, and description to be passed in as arguments.
function createItem(name, price, description) {
    return { id: (0, uuid_1.v4)(),
        name: name,
        price: price,
        description: description
    };
}
// this function will bring an object of Item Type and an User object and it will add the item to the users cart
function addToCart(item, user) {
    user.cart.push(item);
}
function removeFromCart(item, user) {
    const indexOfItem = user.cart.indexOf(item);
    if (indexOfItem > -1) {
        user.cart.splice(indexOfItem, 1);
    }
}
// this function will bring an object of Item Type and an User object and a quantity of the item to remove and it will remove the quantity amount of instances of the item to the users cart (so if the cart had 5 red hats and we pass in the red hat item and the number 3 for the quantity we would end up with 2 red hats left in the cart)
function removeQuantityFromCart(item, user, quantity) {
    let i = 0;
    while (i < user.cart.length && quantity > 0) {
        if (user.cart[i] === item) {
            user.cart.splice(i, 1);
            quantity -= 1;
        }
        else {
            ++i;
        }
    }
}
// this function will calculate the total price of all items in our cart and RETURNS that value
function cartTotal(user) {
    let cartTotal = 0;
    for (let item of user.cart) {
        cartTotal += item.price;
    }
    return cartTotal;
}
// this function will take a user and console log the items in the users cart
function printCart(user) {
    console.log(`${user.name}'s cart:`);
    for (let item of user.cart) {
        console.log(`${item.name} - ${item.price}`);
    }
}
// CREATE USER
const customer1 = createUser('Carlos', 31);
const customer2 = createUser('Kristina', 33);
console.table(customer1);
console.table(customer2);
console.log('-----------------------');
// CREATE ITEMS
const iPhone = createItem('iPhone', 699, 'Cellphone');
const iPad = createItem('iPad', 799, 'Tablet');
const Macbook = createItem('Macbook Pro', 1599, 'Laptop');
const iMac = createItem('iMac', 1899, 'Computer');
console.table(iPhone);
console.table(iPad);
console.table(Macbook);
console.table(iMac);
console.log('-----------------------');
// ADD ITEMS
addToCart(iPhone, customer1);
addToCart(iPad, customer1);
addToCart(iPad, customer1);
addToCart(iMac, customer1);
console.log(customer1.cart);
addToCart(iPhone, customer2);
addToCart(iPad, customer2);
addToCart(iPad, customer2);
addToCart(iPad, customer2);
addToCart(iPad, customer2);
addToCart(iMac, customer2);
console.log(customer2.cart);
console.log('-----------------------');
// REMOVE ITEMS
removeFromCart(iPhone, customer1);
console.log(customer1.cart);
removeQuantityFromCart(iPad, customer2, 2);
console.log(customer2.cart);
console.log('-----------------------');
// CART TOTAL
console.log(`${customer1.name}'s total is $${cartTotal(customer1).toLocaleString()}`);
console.log(`${customer2.name}'s total is $${cartTotal(customer2).toLocaleString()}`);
console.log('-----------------------');
// SHOW CART TOTAL
printCart(customer1);
