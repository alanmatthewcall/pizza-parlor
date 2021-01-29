
//Buiness Logic

let topping1 = 1;
let topping2 = 1;

function Order(pizzaToppings, pizzaSize) {
  this.pizzaSize = pizzaSize;
  this.pizzaToppings = pizzaToppings;
  this.cartTotal = 0;
}

Order.prototype.topping = function (toppings) {
  this.pizzaToppings.push(toppings);
}

Order.prototype.checkoutTotal = function () {
  if (this.pizzaSize === "12inch") {
    this.cartTotal += 12;
  } else if (this.pizzaSize === "14inch") {
    this.cartTotal += 16;
  } if (this.pizzaToppings.includes("pepperoni")) {
    this.cartTotal += 1;
  } if (this.pizzaToppings.includes("sausage")) {
    this.cartTotal += 1;
  };
  return this.cartTotal;
};



// UI Logic

$(document).ready(function () {
  $("#pizzaParlor").submit(function (event) {
    event.preventDefault();

    const sizePizza = parseInt($("input:radio[name=pizzaSize]:checked").val();
    let pizzaToppingsChoice = [];
    let newOrder = new Order(pizzaSizeChoice, pizzaToppingsChoice);


    let toppingsChoice = parseInt($("input:radio[name=pizzaToppings]:checked").val();

  });
});


