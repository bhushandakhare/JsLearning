console.log(`========================== Assignment objectClone ==============================`);
console.log(`====== Creating the Object bankSBI And bankLocation ====== `);
let bankSBI ={
    Name: "State Bank Of INDIA",
    Branch: "Pune",
    ifscCode:"SBIN0011701",
    branchCode: 11701,
    state: "MAHARASHTRA"
}
console.log(bankSBI);

const bankLocation={
    street: "Nagar Road",
    city: "PUNE",
    pinCode:411058,
}
console.log(bankLocation);
console.log(`====== Cloning the Object bankSBI And bankLocation ====== `);
let obClone= Object.assign({},bankSBI,bankLocation);
console.log(obClone);
console.log(`========== Creating the object rateOfIntrest ========== `);
let rateOfIntrest={
    homeLoanIntrest: '12%',
    personalLoanIntrest: '8%',
    duelIntrest: '15%',
}
console.log(rateOfIntrest);
console.log(`========== Merging the object creating variable is sbiDetails ========== `);
var sbiDetails=Object.assign({},bankSBI,bankLocation,rateOfIntrest);
console.table(sbiDetails)

console.log(`================== Traversing the sbiDetails ==================== `);
for (const key in sbiDetails) {
    console.log(`${key}: ${sbiDetails[key]}`);   
}



