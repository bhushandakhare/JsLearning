console.log(`================================= Assignment Reduce A =================================== `);
console.log(`                                                                                         `);
const array_numbers=[20,11,40,25,37,49,9,90,60,2,19];
console.log(`Given Array: ${array_numbers}`);

const arrayAdd=array_numbers.reduce( (runningTotal, value)=>{
return runningTotal+value;
});
console.log(`Sum of given Array: ${arrayAdd}`);

console.log(` ============================================================= `);
const arrayMul=array_numbers.filter((currentValue)=>{
return currentValue%5==0;
});
console.log(`Numbers are Multiply by 5: ${arrayMul}`);
const arrayAddition= arrayMul.reduce((runningTotal, value)=>{
    return runningTotal + value;
})
console.log(`Addition of Multiply by 5:${arrayAddition} `);

