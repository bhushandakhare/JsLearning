console.log("================================ Assignment Array 1 =======================================");
console.log("                                                                                       ");
arrayFruit=["Banana", "Orange", "Apple", "Mango", "Water Melon" ];
console.log("                                                                                       ");
console.log("============================= Step 1 ==============================");
console.log(`Giiven Array: ${arrayFruit}`)
console.log(`First Element: ${arrayFruit[0]}`);
console.log(`Last Element: ${arrayFruit[arrayFruit.length-1]}`);
console.log("============================= Step 2 ==============================");
arrayFruit.unshift("Papaya");
console.log(`Adding Element in 1st Position: ${arrayFruit}`);
console.log("============================= Step 3 ==============================");
arrayFruit.splice(4,1);
console.log(arrayFruit);
console.log("============================= Step 4 ==============================");
arrayFruit.push("Pineapple");
console.log(arrayFruit);
console.log("============================= Step 5 ==============================");
arrayFruit.splice(5,0,"Dragon Fruit");
console.log(arrayFruit);
console.log("============================= Step 6 ==============================");
arrayFruit.splice(2,1,"Kiwi");
console.log(arrayFruit);
console.log("============================= Step 7 ==============================");
let count=arrayFruit.slice(1,4);
console.log(count);
console.log("============================= Step 8 ==============================");
arrayFruit1=['Papaya', 'Banana', 'Kiwi', 'Apple', 'Mango', 'Dragon Fruit', 'Water Melon', 'Pineapple' ];
var threeNum=arrayFruit1.slice(-3);
console.log(threeNum);