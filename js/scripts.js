
//Buiness Logic

function Order(firstName, lastName,) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.pizzaToppings = pizzaToppings ["topping1", "topping2"];
  this.cartTotal = 0;
  this.tax = 1;
}  

const toppings1 = 1;
const toppings2 = 1;


Order.prototype.fullName = function() {
  return this.firstName + " " + this.lastName;
}

Order.prototype.checkoutTotal = function() {
  return "Your Total Is " + this.cartTotal + this.tax + " Please Click Submit To Complete Your Order"
};

// UI Logic

$(document).ready(function() {
  $("form#pizzaParlor").submit(function(event) {
    event.preventDefault();
    const inputtedPlayer1 = $("input#player1").val();
    const inputtedPlayer2 = $("input#player2").val();
    
  })
})



  