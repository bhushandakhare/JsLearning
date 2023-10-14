console.log(
  `========================================== Assignment JSON  ==========================================`
);
const Employee1 = `{
    "name": "Aleix Melon",
    "id": "E00245",
    "role": ["Dev", "DBA"],
    "doj": "11-12-2019",
    "married": false,
    "address": {
        "street": "32,Laham St.",
        "city": "Innsbruck",
        "country": "Austria"
    },
    "referred-by": "E0012"
}`;

console.log(typeof Employee1);
console.log(
  `======================================= Converting String to Object ============================================`
);
const obj1 = JSON.parse(Employee1);
console.log(typeof obj1);
console.table(obj1);
console.log(
  `=============================================================================`
);
const role1 = JSON.parse(Employee1).role[0];
console.log(`Display The Role from the array :=> "${role1}" `);
console.log(
  `=============================================================================`
);
const lastName = JSON.parse(Employee1).name.split(" ")[1];
console.log(`Last Name: "${lastName}" `);
console.log(
  `=============================================================================`
);
const dojDate = new Date(JSON.parse(Employee1).doj);
const dojYear = dojDate.getFullYear();
console.log(`Date Of Joing Year: "${dojYear}" `);
