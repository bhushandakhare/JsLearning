
var num = "300";
var result = +num;
console.log(typeof result);


var cube= function(num){
var result=  num * num * num;
console.log(result);
}
cube(5);

var str=" true";
var result = Boolean(str);
console.log(typeof result);



function statement(num) {
if (num<=3) {
    console.log("Your elegible for carry on");

}
else{
    console.log(`ur not elegible for carrry on`);
}
}
statement(3)

// 6. Given a string company = “Codemind Technology”;
// a. Write a code to reverse only word → Technology
// b. Expected output → “ ygolonhceT” 
let company = "Codemind Technology";
console.log(`Given String is ${company}`);
let reverse="";
for (let index =company.length-1 ; index >0; index--) {

    let char=company.charAt(index);
   // console.log(char);
    if(char!=" "){
        reverse=reverse+char;  
    }
    else
     break;
}
console.log(`Resultant String is ${reverse}`);

console.log(`================2nd Logic  Duplicate Element Array ===============`);

let num = [11, 3, 4, 11, 4, 7, 3];
let uniqueNum = [];

for (let i = 0; i < num.length; i++) {
    if (!uniqueNum.includes(num[i])) {
        uniqueNum.push(num[i]);
    }
}

console.log("Original array:", num);
console.log("Array without duplicates:", uniqueNum);

const str = "How are you mate"; // "HoW ArE YoU MatE"
const arrayWord = str.split(' ');
let finalStr = '';
for (const word of arrayWord) {
    let firstChar = word.charAt(0).toUpperCase();
    let lastChar = word.charAt(word.length-1).toUpperCase();
    // Replace word,  first char by firstChar
    // Replace word,  last char by lastChar
    finalStr = finalStr + word;
    console.log(word, firstChar, lastChar );
}
console.log(finalStr);