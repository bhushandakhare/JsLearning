
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