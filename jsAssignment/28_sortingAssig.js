console.log( `==================================== Assignment Sorting ==================================== `);
  console.log( `                                                                                           `);
const arrayRollNumbers=[113, 45, 56, 11, 32, 45, 109, 799, 56, 45];
console.log(`Given Array : ${arrayRollNumbers}`);
console.log(`                                                                                                 `);
const reverseArray= arrayRollNumbers.reverse();
console.log(`1] Reverse the Given Array: ${reverseArray}`);

const arraySort= arrayRollNumbers.sort();
console.log(`2] Array Sorting: ${arraySort}`);

 const ascending=arrayRollNumbers.sort((a,b)=> {
    return a>b ? 1 : -1;
 })
console.log(`3] Array in Ascending Order: ${ascending}`);

const sortedArray= arrayRollNumbers.slice();
const result= sortedArray[sortedArray.length-1];
console.log(`4] Greatest Number From the Array: ${result}`);

const firstNum=ascending[0];
console.log(`5] Smallest Number From the Array: ${firstNum}`);


const removeDup= new Set(ascending);
console.log(`6] Removing Duplicate Elements:`, removeDup);

