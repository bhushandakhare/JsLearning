let personalDetails={
    fullName : 'Bhushan Dakhare',
    graduation: "BE-CSE",
  mobileNo: 8423552325,

}
let collegeDetails={
    collegeName:'P.R Pote Patil Institute of Engineering',
    university: 'SGBAU',
    city: "Amravati"
}

const merge=Object.assign({},personalDetails,collegeDetails)
console.table(merge);
console.log(`============================================================================================`);
let array=["Rojan", "Sanket","Avinash","Rahul","Atharva"];
Object.freeze(array);
for (const frd of array) {
    console.log(frd);
}
console.log(`============================================================================================`);




