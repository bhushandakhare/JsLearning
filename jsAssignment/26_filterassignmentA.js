const arrayNumbers=[20,11,40,25,37,49,9,90,60,2,19];

const greter50=arrayNumbers.filter((currentValue)=>{
    return currentValue > 50;
});
console.log(`The Numbers Which Are Greter than 50: ${greter50}`);

const evenNum=arrayNumbers.filter((currentValue)=>{
    return currentValue%2==0;
});
console.log(`The even Numbers in array : ${evenNum}`);

const oddNum=arrayNumbers.filter((currentValue)=>{
    return currentValue%2!==0;
});
console.log(`The Odd Numbers in array : ${oddNum}`);

const multipleNum=arrayNumbers.filter((currentValue)=>{
    return currentValue%5==0;
});
console.log(`Numbers which are multiple of 5 : ${multipleNum}`);

const between=arrayNumbers.filter((currentValue)=>{
    return currentValue> 20 && currentValue<50; 
});
console.log(`Numbers between 20 and 50 : ${between}`);