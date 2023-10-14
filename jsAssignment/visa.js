console.log(`-------------------------------Q.1 create the class and also using Array---------------------------------------------`);

class Vehicle {
    NameOfVehicle 
    YearOfManufacture
    Color
    NumberOfDoors
    VehicleHistory
    FuelType

    //constructor
    constructor(NameOfVehicle, YearOfManufacture, Color, NumberOfDoors, VehicleHistory, FuelType) {
                this.NameOfVehicle = NameOfVehicle;
                this.YearOfManufacture = YearOfManufacture;
                this.Color = Color;
                this.NumberOfDoors = NumberOfDoors;
                this.VehicleHistory = VehicleHistory;
                this.FuelType = FuelType;
            }
        }
        
        const vehicleFord = new Vehicle('Ford', '2018', 'White', '4', 'If it has been in any accidents, had regular maintenance.', 'gasoline or diesel');
        console.log(`Details For Ford Car :=>`, vehicleFord);

        console.log(`--------------------------------------------------------------------------------------`);

        const vehicleToyota = new Vehicle('Toyota', '2020', 'Silver', '4', 'No accidents', 'Hybrid');
        console.log(`Details For Toyota Car :=>`, vehicleToyota);

        console.log(`----------------------------------------------------------------------------------`);

        const vehicleHonda = new Vehicle('Honda', '2020', 'Blue', '4', 'No accidents, well-maintained.', 'Gasoline');
        console.log(`Details For Honda Car :=>`, vehicleHonda);

        console.log(`---------------------------------------------------------------------------------`);

        const vehicleKia = new Vehicle('Kia', '2019', 'Black', '4', 'regular maintenance.', 'gasoline');
        console.log(`Details For Kia Car :=>`, vehicleKia);

        console.log(`----------------------------------------------------------------------------------`);


        const vehicleBMW = new Vehicle('BMW', '2020', 'Blue', '4', 'well-maintained.', 'gasoline');
        console.log(`Details For BMW Car :=>`, vehicleBMW);

        console.log(`===========Traveling of array=============`);
        const arrayOfVehicle = [vehicleFord,vehicleToyota, vehicleHonda, vehicleKia, vehicleBMW];
        for (const element of arrayOfVehicle) {
            console.log(`- Details for ${element.NameOfVehicle} Car:`);
            console.log(`- Name of Vehicle: ${element.NameOfVehicle}`);
            console.log(`- Year of Manufacture: ${element.YearOfManufacture}`);
            console.log(`- Color: ${element.Color}`);
            console.log(`- Number of Doors: ${element.NumberOfDoors}`);
            console.log(`- Vehicle History: ${element.VehicleHistory}`);
            console.log(`- Fuel Type: ${element.FuelType}`);
            console.log(`--------------------------------------`);
}
        
console.log(`-------------------------------Q.2 using method ---------------------------------------------`);
class College {
    CollegeName
    Branch
    City
    University
 // constructor
 constructor(CollegeName, Branch, City, University){
    this.CollegeName = CollegeName;
    this.Branch = Branch;
    this.City = City;
    this.University = University;
}
// methods
display(){
    console.log(`Details Of College :=> ${this.CollegeName}, ${this.Branch}, ${this.City}, ${this.University}`);
  }
}
console.log(`-------------------------------Details of SVPM-COE Baramati College---------------------------------------------`);
const myCollege = new College('SVPM-COE Baramati College', 'Information Technology', 'Baramati', 'Pune University');
myCollege.display();

console.log(`-------------------------------Details of COEP Pune College---------------------------------------------`);

const CollegeOfCOEP = new College('COEP Pune College', 'Computer Engg', 'Pune', 'Pune University');
CollegeOfCOEP.display();

console.log(`-------------------------------Details of VJTI Mumbai College---------------------------------------------`);

const CollegeOfVJTI = new College('VJTI Mumbai College', 'Mechnical Engg', 'Mumbai', 'Mumbai University');
CollegeOfVJTI.display();

console.log(`-------------------------------Details of PICT College---------------------------------------------`);

const CollegeOfPICT = new College('PICT College', 'E&TC', 'Pune', 'Pune University');
CollegeOfPICT.display();

console.log(`-------------------------------Q.3 using Function with pass argument---------------------------------------------`);

function traverseObject(college) {
    for (const key in college) {
        const element = college[key];
        console.log(`${key}: ${element}`);
    }
}

const myCollege1 = new College('SVPM-COE Baramati College', 'Information Technology', 'Baramati', 'Pune University');
traverseObject(myCollege1);

const CollegeOfCOEP1 = new College('COEP Pune College', 'Computer Engg', 'Pune', 'Pune University');
traverseObject(CollegeOfCOEP1);

const CollegeOfVJTI1 = new College('VJTI Mumbai College', 'Mechnical Engg', 'Mumbai', 'Mumbai University');
traverseObject(CollegeOfVJTI1);

const CollegeOfPICT1 = new College('PICT College', 'E&TC', 'Pune', 'Pune University');
traverseObject(CollegeOfPICT1);


console.log(`============================================ vishakha  assignment =========================`);

console.log(`=======Assignment===================`);
var countStr = function(inputStr){
   
    var count = 0;

    for(let i=0;i<= inputStr.length-1; i++){
        var char = inputStr.charAt(i);
        if(char=='A' && "a" || char == 'E' && "e"|| char == 'V'){
       
            count = count+1;
            break;
        }
    }
   return count;
   
}
 var str1 = countStr("I am Angular Developer");
 console.log(`String :=> "I am Angular Developer"`);
 console.log(`Count Character "A" & "a" :-> ${str1} `);

 console.log(`---------------------------------------------------`);
 console.log(`String :=> "I am React DevEloper"`);
 var str2 = countStr("I am React DevEloper");
 console.log(`Count Character "E" & "e" :-> ${str2}`);

 console.log(`---------------------------------------------------`);

 var str3 = countStr("Im Vishakha Kokare");
 console.log(`String :=> "Im Vishakha Kokare"`);
 console.log(`Counting......."V" Character :-> ${str3}`);