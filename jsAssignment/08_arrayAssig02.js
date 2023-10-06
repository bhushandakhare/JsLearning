console.log("=========================================== Assignment Array 02 ====================================");
console.log("                                                                                              ");
arrayNumbers=[20,31,40,25,23,11,29,9,60,2,11]
console.log(`Given Array: ${arrayNumbers}`);
console.log(`================================== Step 1 ===============================`);
console.log(arrayNumbers.length);
console.log(`================================== Step 2 ===============================`);
console.log(arrayNumbers[0]);
console.log(arrayNumbers[arrayNumbers.length-1]);
console.log(`================================== Step 3 ===============================`);
console.log(arrayNumbers[arrayNumbers.length-3]);
console.log(`================================== Step 4 & 6 ===============================`);
let result1=""
let sum2=0;
for (const index in arrayNumbers) {
   if (index%2==0) {

      const element5 = arrayNumbers[index];
      result1=result1+ element5+"  "
      sum2=sum2+element5;
   
     }
}

console.log(`Even Numbers: ${result1}`);
console.log(`Sum Of Even Numbers: ${sum2} `);

console.log(`================================== Step 5 & 7 ===============================`);
let result2=""
let sum=0;
for (const index in arrayNumbers) {
   if (index%2!==0) {

      const element = arrayNumbers[index];
      result2=result2+ element+"  "
      sum=sum+element;
   
     }
}

console.log(`Odd Numbers: ${result2}`);
console.log(`Sum Of Odd Numbers: ${sum} `);
console.log(`================================== Step 8 ===============================`);
sum3=0;
for (let index = 0; index < arrayNumbers.length; index++) {
    sum3 += arrayNumbers[index];
    
}
console.log(`Sum Of all Elements from Array: ${sum3}`);
console.log(`================================== Step 9  ===============================`);
let multiple="";
for (const element of arrayNumbers) {
    if (element%5==0) {
        multiple+=element+" ";
    }
}console.log(`The Number Which are multiple of 5 is: ${multiple}`);
console.log(`================================== Step 10 & 11 ===============================`);
arrayNumbers1=arrayNumbers.includes(115);
console.log(`Is the 115 Number Available in Array: ${arrayNumbers1}`);
arrayNumbers=arrayNumbers.includes(23);
console.log(`Is the 115 Number Available in Array: ${arrayNumbers}`);

console.log(`================================== Step 12 ===============================`);
arrayNumbers1=[20,31,40,25,23,11,29,9,60,2,11]
arrayNumbers1.splice(3,0,55,66)
console.log(arrayNumbers1);
console.log(`================================== Step 13 ===============================`);
var slice1=arrayNumbers1.splice(4);
console.log(slice1);