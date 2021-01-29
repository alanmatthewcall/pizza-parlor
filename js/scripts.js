
//Buiness Logic

function Order(firstName, lastName,) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.pizzaToppings = pizzaToppings ["topping1", "topping2"];
  this.cartTotal = 0;
  this.tax = 1;
}  

Order.prototype.fullName = function() {
  return this.firstName + " " + this.lastName;
}

Order.prototype.checkoutTotal = function() {
  return "Your Total Is " + this.cartTotal + this.tax + " Please Click Submit To Complete Your Order"
};

// UI Logic

$(document).ready(function () {
  $("#pizzaParlor").submit(function (event) {
    $("#nineteen").hide();
    $("#eighteen").hide(); 
    $("#seventeen").hide();
    const toppingsOne = parseInt($("input:radio[name=creative]:checked").val());
    const toppingsTwo = parseInt($("input:radio[name=design]:checked").val());
    
    event.preventDefault();
    if (toppingsOne + toppingsTwo === 2) {
      $("#nineteen").show();
    } else if (toppingsOne + toppingsTwo === 1) {
      $("#eighteen").show();
    } else (toppingsOne + toppingsTwo === 0) {
      $("#seventeen").show();
    }
  });
});


  