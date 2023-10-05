console.log(
  `============================= Assignment 06_Loop ==============================`
);
console.log(
  `                                                                          `
);
console.log(`============================ Step 1 ============================`);
var str = "I am very good IT developer ";
var count = 0;
var vowels = "AEIOU";
for (var index = 0; index < str.length - 1; index++) {
  var char = str.charAt(index).toUpperCase();
  if (vowels.includes(char)) {
    count = count + 1;
  }
}
console.log(`The total Vowels in A given String is: ${count}`);

console.log(
  `============================ Step 2  ============================`
);
function cube() {
  var result = 0;
  for (let index = 1; index <= 5; index++) {
    var result = result + index * index * index;
  }
  console.log(`The sum of cube of numbers from 1 to 5 is: ${result}`);
}
cube();

console.log(`============================ Step 3 ============================`);
function oddPositionedChars(str) {
  var result = " ";
  for (let index = 1; index < str.length - 1; index++) {
    if (index % 2 !== 0 && str.charAt(index) !== " ") {
      result = result + str.charAt(index) + " ";
    }
  }
  return result;
}
var str1 = oddPositionedChars("Hard work always pay back");
console.log(`Odd positioned character:${str1}`);
var str2 = oddPositionedChars("Soon I will be UI IT Champ ");
console.log(`Odd positioned character:${str2}`);
