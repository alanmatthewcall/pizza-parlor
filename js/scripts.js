
//Buiness Logic

let topping1 = 1;
let topping2 = 1;

function Order(pizzaToppings, pizzaSize) {
  this.pizzaToppings = pizzaToppings ["topping1", "topping2"];
  this.pizzaSize = pizzaSize;
  this.cartTotal = 0;
}  



Order.prototype.fullName = function() {
  return this.firstName + " " + this.lastName;
}

Order.prototype.checkoutTotal = function() {
  totalCost = cartTotal + this.pizzaToppings;
  return fullName + " Your Total Is " + totalCost +  " Please Click Submit To Complete Your Order";
};

// UI Logic

$(document).ready(function () {
  $("#pizzaParlor").submit(function(event) {
    event.preventDefault();
    const this.firstName = $("input#firstName").val();
    const this.lastName = $("input#lastName").val();
    const toppingsOne = parseInt($("input:radio[name=creative]:checked").val());
    const toppingsTwo = parseInt($("input:radio[name=design]:checked").val());
    let newOrder = new Order(fullName, totalCost)
    $("#show-cart").show();
  });
});


  