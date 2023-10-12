console.log(
  `================================ Assignment Object cloning and Traversing ================================`
);
console.log(
  `                                                                                                     `
);
console.log(
  `================================= step 1 & 2 ================================= `
);
let bankSBI = {
  bankName: "SBI",
  branchName: "Gadge Nagar",
  ifscCode: "SBIN00274",
  branchCode: 8776,
};
console.log(bankSBI);
let location = {
  street: "pote road",
  city: "Amravati",
  pinCode: 447856,
};
console.log(location);
console.log(
  `================================= step 3 ================================= `
);
console.log(
  `================ clone objects using Object.assign() ===============`
);
const result = Object.assign({}, bankSBI, location);
console.table(result);

console.log(
  `================ clone objects using Spread Operator ===============`
);
let sbiBank = { ...location };
console.log(sbiBank);

console.log(
  `================================= step 4 & 5 ================================= `
);
console.log(
  `================ Merging the sbiBank,location and rateoOfInterest Objects ===============`
);
let rateOfIntrest = {
  homeLoneInterest: "20%",
  personalLoanInterest: "8%",
  duelInterest: "12%",
};

let sbiDetails = Object.assign({}, sbiBank, location, rateOfIntrest);
console.table(sbiDetails);

console.log(
  `================================= step 6 ================================= `
);
for (const key in sbiDetails) {
  const element = sbiDetails[key];
  console.log(`${key}: ${element}`);
}
