console.log(`============================== Assignment Map Method A ==============================`);
console.log(`                                                                                `);
const arrayNumbers=[20,11,40,25,23,11,9,31,60,2,19];
console.log(`Given array: ${arrayNumbers}`);

const add10= arrayNumbers.map((currentValue)=>{
    return currentValue + 10;
});
console.log(`Add 10 into each element: ${add10}`);

const cube= arrayNumbers.map((currentValue)=>{
    return currentValue * currentValue * currentValue;
});
console.log(`Cube of each element: ${cube}`);

const addIndex= arrayNumbers.map((currentValue,index)=>{
    return currentValue + index;
});
console.log(`Add index in each element: ${addIndex}`);