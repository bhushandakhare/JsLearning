console.log("============================== Assignment OperatorB =================================");
console.log("                                                                                    ");
console.log("======================= Step 1 =========================");
function greaterNumber() {
var v1= value1=10;
var v2= value2=-10;
 var check= value1>value2 ? v1:v2;
console.log(`Given Number: ${value1} and ${value2}: ${check} is greater`);

var n1 = 800;
var n2 = 899;
var check= n1>n2 ? n1 : n2;
console.log(`Given Number: ${n1} and ${n2}: ${check} is greater`);

    
}
greaterNumber();

console.log("======================= Step 2 =========================");

function isEvenOrOddNum() {
    var value=29;
    var result=value%2 == 0 ? "True" : "False";
    console.log(`${value} is a Even no.:${result}`);
    var value1=44;
    var result1=value1%2 ==0  ? "True" : "False";
    console.log(`${value1} is a Even no.:${result1}`);
    var value2=0;
    var result2=value2%2 ==0 ? "True" : "False";
    console.log(`${value2} is a Even no.:${result2}`);
    var value3=101;
    var result3=value3%2 ==0 ? "True" : "False";
    console.log(`${value3} is a Even no.:${result3}`);
}isEvenOrOddNum();

console.log("======================= Step 3 =========================");

function wordLength(str) {
    var  spl=str.split(" ");
    var splLen=spl.length;
      var result=splLen%2 ? "EVEN" : "OOD"
      return result;
}
var java=wordLength("JavaScript");
console.log(`Length of JavaScript is Even Or Odd: ${java}`);
var google=wordLength("GoogleChrome");
console.log(`Length of GoogleChrome is Even Or Odd: ${google}`);
var dev=wordLength("Developer Smart");
console.log(`Length of Developer Smart is Even Or Odd: ${dev}`);