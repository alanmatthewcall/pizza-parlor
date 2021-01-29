
//Buiness Logic

let topping1 = 1;
let topping2 = 1;

function Order(firstName, lastName,) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.pizzaToppings = pizzaToppings ["topping1", "topping2"];
  this.cartTotal = 0;
}  

function pizza() {
  this.price
  this.qty
}

//Order.prototype.fullName = function() {
 // return this.firstName + " " + this.lastName;
//}

Order.prototype.checkoutTotal = function() {
  totalCost = cartTotal + this.pizzaToppings;
  return "Your Total Is " + totalCost +  " Please Click Submit To Complete Your Order"
};

// UI Logic

$(document).ready(function () {
  $("#pizzaParlor").submit(function (event) {
    $("#nineteen").hide();
    $("#eighteen").hide(); 
    $("#seventeen").hide();
    const this.firstName = $("input#firstName").val();
    const this.lastName = $("input#lastName").val();
    const toppingsOne = parseInt($("input:radio[name=creative]:checked").val());
    const toppingsTwo = parseInt($("input:radio[name=design]:checked").val());
    $("#show-cart").slideDown();
    if (toppingsOne + toppingsTwo === 2) {
      $("#nineteen").show();
    } else if (toppingsOne + toppingsTwo === 1) {
      $("#eighteen").show();
    } else (toppingsOne + toppingsTwo === 0) {
      $("#seventeen").show();
    }
  });
});


  