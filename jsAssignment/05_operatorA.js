console.log("====================================== Assignment 05_operatorA ===============================");
console.log("                                                                              ");
console.log("============================= Step 1 =====================================");
function squareOfWordLength(str){
    var lengthOfStr=str.length;
    console.log(`Given String length is ${lengthOfStr} `);
    var result= lengthOfStr**2;

    return result;   
}
 
var mul=squareOfWordLength("JavaScript"); 
console.log(`Square of given string Length : ${mul}`); 
var mul=squareOfWordLength("Google Chrome"); 
console.log(`Square of given string Length : ${mul}`); 
var mul=squareOfWordLength("Developer Smart"); 
console.log(`Square of given string Length : ${mul}`); 

console.log("                                                                    ");
console.log("============================= Step 2 =====================================");

function angularDev() {
    var str="I am Angular Developer";
    console.log(`Given String: ${str}`);

    var len=str.length;
    console.log(`Given string length: ${len}`);

    var spl=str.split(" ")
    console.log(`Total word: ${spl}`);

    var splLen=spl.length;
    console.log(`Given word length: ${splLen}`);

    var divide=len/splLen;
    console.log(`Dividing String length by word length: ${divide}`);

    var multiple=len*splLen;
    console.log(`Multiplying String Length by word length: ${multiple}`);

}
  angularDev();

 


