console.log(`========================================== Arrow Function Assignment ==========================================`);
console.log(`                                                                                                         `);
console.log(`============================================ Step 1 ===================================================`);
let arrow=()=>{
    console.log("Good Morning,Today is Wednesday");
};
arrow();

console.log(`============================================ Step 2 ===================================================`);
console.log(`======================== no args And no return value ==========================`);
let multiple=(n1,n2,n3=1)=>{
let result= n1*n2*n3;
console.log(`Multiplication of ${n1}, ${n2}, ${n3} : ${result}  `);
};
multiple(5,5,2);
console.log(`=============================== Assign default value ============================= `);
multiple(10,4);

console.log(`====================================================== Step 3 =======================================================`);

let add=(n1,n2,n3,n4,n5)=>{
let result=n1 + n2 + n3 + n4 + n5;
console.log(`Given value is : ${n1},${n2},${n3},${n4},${n5}`);
return result;
};
let result=add(100,100,200,349,756);
console.log(`Addition of given Numbers : ${result}`);
console.log(`                                                                       `);
let result1=add("I am", " learning", " ES6", " features", " in depth");
console.log(`Concat : ${result1}`);