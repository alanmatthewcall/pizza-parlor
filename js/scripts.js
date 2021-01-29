
//BuinesS Logic

function Order() {
  this.firstName = firstName;
  this.lastName = lastName;
  this.pizzaSize = pizzaSize;
  this.pizzaToppings = pizzaToppings;
  this.cartTotal = 0;
  this.tax = 1;
}  

Order.prototype.fullName = function() {
  return this.firstName + " " + this.lastName;
}

Order.prototype.checkoutTotal = function() {
  return "Your"
}