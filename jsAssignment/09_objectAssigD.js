console.log(
  `======================================== Assignment ObjectD ==========================================`
);
console.log(
  `                                                                                                 `
);
const professor = {
  name: "John Doe",
  age: 55,
  collegeName: "Government college Of Engineering",
  expertise: "Computer Science",
  degree: {
    engineering: "CSC",
    masters: "DATA Science",
    PHD: "Adv Computing",
  },
  certificates: [
    "Hacker Rank Participation",
    "Certificate in IFE course",
    "Certificate in ADv Programming",
  ],
};
console.log(professor);
console.log(professor.degree);
console.log(professor.certificates);
console.log(
  `==========================Adding totalExperience=====================`
);
(professor.totalExperience = "14 years"), console.log(professor);
console.log(
  `======================= Modifying Age Property ======================`
);
(professor.age = 58), console.log(professor);
console.log(`======================= Adding in Array ======================`);
professor.certificates.push("Oracle Certified"),
  console.log(professor.certificates);
console.log(
  `======================= last Elements Of an Array ======================`
);
let lastArray = professor.certificates[professor.certificates.length - 1];
console.log(lastArray);
console.log(
  `======================= log Complete Object ======================`
);
console.log(professor);

console.log(
  `======================= Traversing Array Certification ======================`
);
for (const travers of professor.certificates) {
  console.log(travers);
}




