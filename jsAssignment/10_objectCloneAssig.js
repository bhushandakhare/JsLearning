console.log(
  `================================== Assignment Object Clone =================================`
);
let personalDetails = {
  fullName: "Bhushan Dakhare",
  graduation: "BE-CSE",
  mobileNo: 8423552325,
};
let collegeDetails = {
  collegeName: "P.R Pote Patil Institute of Engineering",
  university: "SGBAU",
  city: "Amravati",
};
console.log( `======================== Merging the personalDtails and collegeDetails Objects ====================`);
const merge = Object.assign({}, personalDetails, collegeDetails);
console.table(merge);
console.log(
  `============================= Array freezed and Iterate ================================`
);
let array = ["Rojan", "Sanket", "Avinash", "Rahul", "Atharva"];
Object.freeze(array);
for (const frd of array) {
  console.log(frd);
}
console.log(
  `=========================== Reverse the Word Technology From Given String =============================`
);
let str = "Codemind Technology";
console.log(`Given String is ${str}`);
let result = "";
for (let index = str.length - 1; index > 0; index--) {
  let char = str.charAt(index);
  if (char !== " ") {
    result = result + char;
  } else {
    break;
  }
}

console.log(`Reverse Only Technology: ${result}`);
