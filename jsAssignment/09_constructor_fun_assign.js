console.log(
  `=================================== Assignment Constructor ===========================================`
);
console.log(
  `                                                                                                      `
);
console.log(
  `============================================= Step 1 & 2 =====================================================`
);
function Bank(bankName, location, ifscCode, branchCode) {
  this.bankName = bankName;
  this.location = location;
  this.ifscCode = ifscCode;
  this.branchCode = branchCode;
}
const sbiBank = new Bank("SBI", "Chandrapur", "SBIN000752", 4585);
console.log(
  `SBI Bank Details==> Bank Name:- ${sbiBank.bankName}, Location:- ${sbiBank.location}, IFSC Code:- ${sbiBank.ifscCode}, Branch Code:- ${sbiBank.branchCode}`
);

const yesBank = new Bank("Yes Bank", "Amravati", "YESB16549", 8954);
console.log(
  `YES Bank Details==> Bank Name:- ${yesBank.bankName}, location:- ${yesBank.location}, ifscCode:- ${yesBank.ifscCode}, branchCode:- ${yesBank.branchCode}`
);

const axisBank = new Bank("AXIS", "Nagpur", "AXIS614848", 7896);
console.log(
  `AXIS Bank Details==> Bank Name:- ${axisBank.bankName}, location:- ${axisBank.location}, ifscCode:- ${axisBank.ifscCode}, branchCode:- ${axisBank.branchCode}`
);

const mahBank = new Bank("MAHBANK", "Chandrapur", "SBIN000752", 4585);
console.log(
  `MAHA Bank Details==> Bank Name:- ${mahBank.bankName}, location:- ${mahBank.location}, ifscCode:- ${mahBank.ifscCode}, branchCode:- ${mahBank.branchCode}`
);
console.log(
  `                                                                                                    `
);
console.log(
  `========================================== Step 3 & 4 ===============================================`
);
Bank.prototype.openTime = "9 AM IST";
console.log(`Bank Opening time please visit after ${axisBank.openTime} `);

Bank.prototype.closeTime = "6 PM IST";
console.log(`Bank Closing time please visit before the ${axisBank.closeTime}`);

console.log(
  `                                                                                                    `
);
console.log(
  `========================================== Step 5 & 6 ===============================================`
);

console.log(
  `Working Time of ${sbiBank.bankName} Bank: ${sbiBank.openTime} to ${sbiBank.closeTime}`
);

console.log(
  `Working Time of ${axisBank.bankName} Bank: ${axisBank.openTime} to ${axisBank.closeTime}`
);

console.log(
  `                                                                                                     `
);
console.log(
  `========================================== Step 7 ===============================================`
);
console.log(
  `${yesBank.bankName} Code is ${yesBank.branchCode} And its working time After ${yesBank.openTime}`
);
