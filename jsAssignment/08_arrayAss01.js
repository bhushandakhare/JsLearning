console.log(
  `======================== Assignment Array01 ==========================`
);
console.log(" ================== Step 1 ==========================");
 let arrayNumbers=[22, 11, 44, 55, 77, 33];
 for (let index = 0; index < arrayNumbers.length; index++) {
  if (arrayNumbers.indexOf(arrayNumbers[index]) % 2 == 0 ){
    const element = arrayNumbers[index];
    console.log(`Position of even Numbers: ${element} `);
  }
}
console.log(" ================== Step 1 ==========================");
let arrayNumbers1=[22, 11, 44, 55, 77, 33];
let sum=0;
for (let index = 0; index <arrayNumbers1.length; index++) {
sum+=arrayNumbers1[index];
 
}
console.log(`Sum Of the Given Array: ${sum}`);
