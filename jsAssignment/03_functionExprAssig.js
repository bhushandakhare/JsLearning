console.log("============================== Assignment Function Expression ==============================");
console.log("                                                                                             ");
console.log("=========================== Step 1 & 2=========================== ");
var square=function (num){
var squareOfNum= num * num;

    return squareOfNum;
    
}
var result = square(5);
console.log(`Given value is 5 and its Square is: ${result}`);

var result = square(25);
console.log(`Given value is 25 and its Square is: ${result}`);

var result = square(67);
console.log(`Given value is 67 and its Square is: ${result}`);

var result = square(89);
console.log(`Given value is 89 and its Square is: ${result}`);

var result = square(59);
console.log(`Given value is 59 and its Square is: ${result}`);

console.log(`Type of Variable Name is: ${typeof  square}`);


console.log("=========================== Step 3 =========================== ");

var areaOfRectangle =function(length, width) {
  var area = length * width;
  return area;
}
var area=areaOfRectangle(499,917);
console.log(`Area of Rectangle is: ${area}`);

console.log("=========================== Step 4 =========================== ");

var swapValues = function (value1,value2){
    console.log(`Value Before Swap: ${value1}, ${value2}`);
    var temp =value1;
    value1=value2;
    value2=temp;

    console.log(`Value After Swap: ${value1}, ${value2}`);
}
swapValues("Mahi", "Raina");
console.log("                                                                                             ");
swapValues(55, 77);

console.log("=========================== Step 5 =========================== ");

var strHands=function(){
    var char='JS the most popular language of internet'
    console.log(`Given String is: ${char}`);

    var charLength = char.length;
    console.log(`A.Total Character Available in the String is: ${charLength}`);

    console.log('B. Char stored at index 6 is: ', char.charAt(6));

    console.log('C. Char stored at index 11 is: ', char.charAt(11));
   
    var charLast= char.charAt(char.length-1);
    console.log(`D. Given String last Character is: ${charLast}`);

    var charLast0= char.charAt(0);
    console.log(`E. Given String first Character is: ${charLast0}`);


    var charLast3= char.charAt(char.length-3);
    console.log(`F. Given String last third Character is: ${charLast3}`);

    var wordFind=char.split(" ");
    var wordLength = wordFind.length;
    console.log(`G. Total NO of Word is: ${wordLength}`);

    var wordCal= wordLength * wordLength;
    console.log(`Result Square of the Word Length is: ${wordCal}`);




}
strHands();