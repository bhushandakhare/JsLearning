
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