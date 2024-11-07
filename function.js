// DEFINE
function printHeart() {
  console.log("<3");
}
printHeart();

// RETURN VALUE
function multiply(a, b) {
  return a * b;
}
console.log(multiply(2, 3)); // 6
console.log(multiply(9, 9)); // 81
console.log(multiply(5, 4)); // 20

// SCOPE
let animal = "Giant Pacific Octopus";
function observe() {
  let animal = "Pajama Squid"; // function
  console.log(animal);
}
observe(); // Karena memanggil variable yg ada dalam function

let deadlyAnimal = "Blue-Ringed Octopus";
function handleAnimal() {
  let deadlyAnimal = "Scorpionfish";
  console.log(deadlyAnimal);
}
handleAnimal();
console.log(deadlyAnimal);

// ARROW FUNCTION
const sayHello = (person) => {
  console.log(`Hello, ${person}`);
};
sayHello("Hagrid");
sayHello("Luna");
