//using + operator
var n1 = "20";

var n2 = 20;

console.log(n1==n2); 

 
console.log(n1, typeof n1);

n1= +n1;

console.log(n1, typeof n1);
// using Number keyword
console.log("===== String to number conversion ===========");
var n1="30";
console.log(n1,typeof n1);
var num=Number(n1);
console.log(num, typeof num); 

console.log("============= Number to String ==============");
var str= 30;
var result=String(str);
console.log(typeof result);

console.log("================= string to Boolean ==============");
var str=" true";
var result = Boolean(str);
console.log(typeof result);

var result =Boolean("Bhushan");
console.log(typeof  result);
