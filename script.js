const myBackpack = {
  Contents: "Laptop, Charger, Headphones, Phone, Book",

  Color: "Black, Blue, Green, White",

  Made: "China",
};

function myCar() {
  console.log(
    "My backpack is " +
      myBackpack.Color +
      ", it is made in " +
      myBackpack.Made +
      ", and it contains a " +
      myBackpack.Contents +
      "."
  );
}

myCar();

function Car(make, model, color, year) {
  this.make = make;
  this.model = model;
  this.color = color;
  this.year = year;
}

const dadCar = new Car("Toyota", "Camry", "Blue", "2015");
const momCar = new Car("Honda", "Civic", "Red", "2018");
const sonCar = new Car("Ford", "Mustang", "Black", "2020");

console.log(dadCar);
console.log(momCar);
console.log(sonCar);

Car.prototype.descritption = function () {
  return (
    "My car is a " +
    this.make +
    " " +
    this.model +
    ", " +
    this.color +
    ", " +
    this.year +
    "."
  );
};

console.log(momCar.descritption());
console.log(dadCar.descritption());
console.log(sonCar.descritption());
