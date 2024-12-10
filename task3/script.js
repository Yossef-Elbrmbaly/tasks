let num = prompt("Enter a number to reverse: ");

let reversed = num.split('').reverse().join('');
let result = parseInt(reversed);

console.log("Reversed number: " + result);
