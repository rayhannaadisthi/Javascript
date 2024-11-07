function myFirst() {
  myDisplayer("Bye Bye");
}

function mySecond(callback) {
  myDisplayer("Hello");
  callback();
}

function myDisplayer(message) {
  console.log(message);
}

mySecond(myFirst);

// console.log("Paragraf 1");
// setTimeout(() => {
//   console.log("Paragraf 2");
// }, 4000);
// console.log("Paragraf 3");

// function setTime() {
//   const header = document.getElementById("header");
//   header.textContent = new Date().toString();
// }
// setInterval(setTime, 1000);
// console.log("Program Finish");
