//example

//below is normal syntax
const square = function (x) {
  return x * x;
};
console.log(square(5));

//below is arrow function
const squareArrow = (y) => {
  return y * y;
};

console.log(squareArrow(7));

//sample function for arrow
const event = {
  name: "Dota 2 Ti Finals",
  guestList: ["formless", "drac", "Miracle"],
  printGuestList() {
    console.log("Title for event:" + this.name);
    //the below arrow will access the this pointer
    this.guestList.forEach((guest) => {
      console.log(`${guest} is attending ${this.name}`);
    });
  },
};

event.printGuestList();

//Arrow functions dont bind their own "This" value
