## **Pizza Parlor**


## Built to allow user to input toppings and pizza size desired and return a total price 

#### *By: _Alan Call_*

## Technologies Used

* HTML
* CSS
* JavaScript
* BootStrap
* Jquery
* Markdown

## Tests

```
Describe: Order()
  Test: 'It will construct an Order object'
  Code: let myOrder = new Order();
  Expect(myOrder).toEqual(Order{});

  Test: 'It takes a size arguement and constructs an object with the same property of it's value'
  Expect(myOrder).toEqual(Order {firstName: "Alan", lastName: "Call", pizzaSize: "Large"});

  Test: 'It takes a toppings arguement and constructs an object with the same property of it's value'
  Expect(myOrder).toEqual(Order {firstName: "Alan", lastName: "Call", pizzaSize: "Large", pizzaToppings: "Pepperoni"});

  Test: 'It takes a cartTotal arguement and constructs an object with the same property of it's value'
  Expect(myOrder).toEqual(Order {firstName: "Alan", lastName: "Call", pizzaSize: "Large", pizzaToppings: "Pepperoni", cartTotal: 19.00});

Describe: checkoutTotal()
  Test: 'It takes the user input and displays a checkoutTotal'
  Expect(myOrder.cartTotal("19.00").toEqual("Your Total Is $20.00");

```

## Description

Pizza Parlor is a mock website that allows a user to build a pizza. The user can select size and toppings desired and see the price.

## Setup

- Clone this repository to your desktop.

- Navigate to the top level of the directory.

- Open file index.html in your browser.

## Known Bugs

- None

## License

[MIT](LICENSE.txt)
Copyright (c) Alan Call

## _Contact Information_

 * Alan Call alanmatthewcall@gmail.com

 