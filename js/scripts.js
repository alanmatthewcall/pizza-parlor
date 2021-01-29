
//Buiness Logic

function Order(firstName, lastName,) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.pizzaToppings = pizzaToppings(toppings1, toppings2);
  this.cartTotal = 0;
  this.tax = 1;
}  

let firstName = [];
let lastName = [];

Order.prototype.fullName = function() {
  return this.firstName + " " + this.lastName;
}

Order.prototype.checkoutTotal = function() {
  return "Your Total Is " + this.cartTotal + this.tax + " Please Click Submit To Complete Your Order"
};





  