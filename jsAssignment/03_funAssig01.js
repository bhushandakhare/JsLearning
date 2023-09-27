console.log('=============================== Assignment: funAssig01 ========================================='); 
   console.log("                                                                                        ");
console.log("================================= STEP 1 ====================================")
function massage() {
    console.log("Function type 1 :function with no argument and no return type");
}
massage();

function state() {
    console.log("Function type 2: function with no argument and no return type");
}
state();
console.log("================================= STEP 2 ====================================")

function myPersonalDetails(firstName , lastName, collegeName){
    var firstName="Bhushan "
    var lastName="Dakhare"
    var collegeName="P.R Pote Patil Institute of Engineering And Research Amravati" 
   
    console.log("Name: ", firstName , lastName);
    console.log("College Name:", collegeName);
   }
   myPersonalDetails();

   console.log("================================= STEP 3 ====================================")

   function swapValue(valueOne, valueTwo){
   console.log("Before Swap: " ,valueOne,valueTwo)
       var temp = valueOne;
       valueOne = valueTwo;
       valueTwo = temp;
    console.log("After Swap: " ,valueOne,valueTwo);
   }swapValue(20, 98);
   swapValue("Virat", "Anushka");
   swapValue(1000,2000);

   console.log("================================= STEP 4 ====================================")

function addThreeValue(numOne, numTwo, numThree){
    var result=numOne + numTwo + numThree;
    return result;
}
var sum=addThreeValue(10.23, 600, 40);
console.log("Addition of three numbers: ", sum);
var wish=addThreeValue("Hello ", "Good ", "Morning");
console.log(wish);



   

























