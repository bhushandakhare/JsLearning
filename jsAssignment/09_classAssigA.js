console.log(`============================================= Assignment Class =====================================================`);
console.log(`                                                                                                 `);
console.log(`====================================== Step 1 =====================================`);
class Vehical{
    companyName
    modelName
    veriant
    fuel
    average
    price

constructor(companyName,modelName,veriant,fuel,average,price){
    this.companyName=companyName;
    this.modelName=modelName;
    this.veriant=veriant;
    this.fuel=fuel;
    this.average=average;
    this.price=price;
}

}
const hundai = new Vehical("Hundai","Verna","Base Veriant","Petrol", "20 KMPL", '18Lakh');


const tata = new Vehical("TATA","ALTROZ","Top Veriant","Petrol", "18 KMPL", '20Lakh');


const mahindra = new Vehical("Mahindra","Scorpio","Top Veriant", "Diesel","22 KMPL", '25Lakh');


const toyota = new Vehical("TOYOTA","Fortuner","Base Veriant", "Petrol","20 KMPL", '23Lakh');

const  honda= new Vehical("HONDA","CITY","Base Veriant", "Diesel", "19 KMPL", '24Lakh');

console.log(`=========================================== Traversing the array ================================================= `);

const arrayCars=[hundai, tata, mahindra, toyota, honda];
for (const element of arrayCars) {
    console.log(``);
    console.log(`Information About`,element);
}

console.log(`                                                                                                 `);
console.log(`====================================== Step 2 =====================================`);

class College {
constructor(collageName,location,totalBranches,university){
this.collageName=collageName;
this.location=location;
this.totalBranches=totalBranches;
this.university=university;
}
display(){
    console.log(`College Details:${this.collageName},${this.location},${this.totalBranches},${this.university}`);
}
}
const pote=new College("P.R pote Patil Group"," Amravati", 7," SGBAU");
pote.display();
const rajiv=new College("Rajiv Gandhi College of Engineering"," Chandrapur", 5," DBATU");
rajiv.display();
const bit=new College("BIT"," Ballarpur", 6," DBATU");
bit.display();
const sipna=new College("Sipna College of Engineering"," Amravati", 7," SGBAU");
sipna.display();
console.log(`                                                                                                 `);
console.log(`====================================== Traversing the array =====================================`);
const arrayCollege=[ pote, rajiv, bit, sipna];
for (const clg of arrayCollege) {
    console.log(`Information About College`,clg);
}

console.log(`                                                                                                 `);
console.log(`                                                                                                 `);
console.log(`====================================== Step 3 =====================================`);

function traversObject(objectclg) {

    for (const key in objectclg) {
        const element=objectclg[key]
console.log(`${key}: ${element}`);
    }
}
traversObject(pote);
console.log(`                                                               `);
traversObject(rajiv);
console.log(`                                                               `);
traversObject(bit);
console.log(`                                                               `);
traversObject(sipna)