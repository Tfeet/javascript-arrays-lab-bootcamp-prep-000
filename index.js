var kittens = [] //define your array here

// Add your functions and code here
var kittens = ["Milo", "Otis", "Garfield"];

function destructivelyPrependKitten(element) {
 kittens.unshift(element);
 return kittens;
}

function destructivelyAppendKitten(element) {
 kittens.push(element);
 return kittens;
}
