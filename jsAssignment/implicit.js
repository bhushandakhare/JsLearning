console.log("============================ Assignment Implicit Conversation ==========================");
console.log("                                                                                           ");
console.log("============================ Implicit conversion into string ===========================");

var result;

result='3' + 2;
console.log(`1. In implicit conversion 2 is a number datatype it can be converted into string and concat the  result is: ${result}`);

result='3' + true;
console.log(`2. In implicit conversion true is a boolean datatype it can be converted into string and concat the result is: ${result}`);

result='3' + undefined;
console.log(`3. In implicit conversion special datatype can be converted into string and concat the result is: ${result}`);

console.log("                                                                                           ");
console.log("============================ Implicit conversion into string ===========================");

var result;

result='4' - true;
console.log(`1. In this implicit conversion true boolean datatype value is 1 and it converted in to number`);
console.log(`and given string value 4 is converted into number thats mean 4 - 1 is: ${result}`);

result = 4 + true;
console.log(`2. In this conversion the boolean value is converted into numbers and the given value after converting 4 + 1 is: ${result} `);

result = 4 + false;
console.log(`3. False boolean data type can converted into number and false value is 0 given value is 4 + false is: ${result}`);

console.log("                                                                                           ");
console.log("============================ Implicit string conversion into Number ===========================");

var result;
 result = '4' - '2'
 console.log(`1. Both the string value can be converted into Numbers and value is 4 - 2 after conversion and result is: ${result}`);

 result = '4' * 2;
 console.log(`2. in this conversion 4 is a string value can be converted into number after converting the result is : ${result}`);
