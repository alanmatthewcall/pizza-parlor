
//Buiness Logic

function Order(pizzaSize, pizzaToppings) {
  this.pizzaSize = pizzaSize;
  this.pizzaToppings = pizzaToppings;
  this.cartTotal = 0;
}

Order.prototype.topping = function (toppings) {
  this.pizzaToppings.push(toppings);
}

Order.prototype.checkoutTotal = function () {
  if (this.pizzaSize === "small") {
    this.cartTotal += 12;
  } else if (this.pizzaSize === "large") {
    this.cartTotal += 16;
  };

  if (this.pizzaToppings.includes("pepperoni")) {
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
    const pizzaSizeChoice = $("input:radio[name=pizza-size]:checked").val();
    let pizzaToppingsChoice = [];
    let newOrder = new Order(pizzaSizeChoice, pizzaToppingsChoice);
    $("input:checkbox[name=pizza-toppings]:checked").each(function () {
      let toppingChoice = $(this).val();
      newOrder.topping(toppingChoice);
    });
    $("span.cartTotal").html(finalOrder.checkoutTotal());
  });
});


