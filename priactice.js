let person={
    fullName: "Bhushan Dakhare",
    age: 25,
    city:"Chandrapur",
    location:{
        street: "gandhi nagar"
    }
}

let college={
    collegeName: "GOVT college",
    university: "amravati university",
}
let result=Object.assign({},person,college);
console.table(result);//assign colning
college= {...person} ;//Spread cloning
console.table(person);
console.table(college);
