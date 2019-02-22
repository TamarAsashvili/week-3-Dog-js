
function bark(animal) {
  if (animal === "cat") {
    console.log("Miaaawww")
  } else {
    console.log("Woef! Woef!!!")
  }
}
bark();


function Max(name) {
  console.log("Dogs name is Max.");
}
Max();

Max.bark = function() {
  console.log(this.name + ' barks 1 time, but 3 times at a cat!')
}
Max.bark();
