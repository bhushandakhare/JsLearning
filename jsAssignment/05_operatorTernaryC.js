
console.log("=================== Assignment Operator Ternary C ========================");
console.log("                                                                         ");
console.log("======================  Step 1  ===========================");
function maleMarriageEligibility(gender,age,boyName) {
var result= gender=="Male" && age>=21
? `Hey ${boyName} you are Eligible for marriage, Congrats`
: `Sorry ${boyName} you are noy Eligible, try next time`;
return result;

} 
var result = maleMarriageEligibility("Male", 25,"Billgates");
console.log(result);
var result = maleMarriageEligibility("Male", 17,"Stew Jobs");
console.log(result);

console.log("======================  Step 2  ===========================");
function femaleMarriageEligibility(gender,age,girlName) {
    var result= gender=="Female" && age>18 
    ? `Hey ${girlName} you are Eligible for marriage, Congrats`
    : `Sorry ${girlName} you are noy Eligible, try next time`;
    return result;
}
var result=femaleMarriageEligibility("Female", 16, "Jenifer");
console.log(result);
var result=femaleMarriageEligibility("Female",27, "Malinda Gates");
console.log(result);