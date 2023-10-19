console.log(`====================================== Assignment B ==============================================`);
console.log(`                                                                                        `);
class Employee{
    constructor(emp_id, emp_name, emp_dept, emp_salary, emp_company){
this.emp_id=emp_id;
this.emp_name=emp_name;
this.emp_dept=emp_dept;
this.emp_salary=emp_salary;
this.emp_company=emp_company;
    }
}
const emp_anil=new Employee(22,"Anil", "IT", 50000, "TCS");
const emp_radha=new Employee(33,"Radha", "HR", 74000, "Wipro");
const emp_rishi=new Employee(55,"Rishi", "Finance", 47000, "TCS");
const emp_sonali=new Employee(66,"Sonali", "Finance", 45000, "Infy");
const emp_monica=new Employee(77,"Monica", "IT", 40000, "Wipro");
const emp_vinayak=new Employee(88,"Vinayak", "IT", 75000, "TCS");
const emp_mahesh=new Employee(99,"Mahesh", "HR", 85000, "Infy");

const arrayEmp=[emp_anil, emp_radha, emp_rishi, emp_sonali, emp_monica, emp_vinayak, emp_mahesh];
console.log(`1] The Employee Working in TCS`);
arrayEmp.forEach(employee => {
    if (employee.emp_company=="TCS") {
        console.log(`Employee Name: ${employee.emp_name} , Company: ${employee.emp_company}`);
    }
});
console.log(`                                                                                        `);
console.log(`2] The Employee Working in Finance`);
arrayEmp.forEach(employee => {
    if (employee.emp_dept=="Finance") {
        console.log(`Employee Name: ${employee.emp_name} , Company: ${employee.emp_dept}`);
    }
});
console.log(`                                                                                        `);
console.log(`3] The Employee Name Start with R`);
arrayEmp.forEach(employee => {
    if (employee.emp_name.startsWith("R")) {
        console.log(`Employee details: ${employee.emp_id}, ${employee.emp_name}, ${employee.emp_dept}, ${employee.emp_salary}, ${employee.emp_company}`);
    }
});
console.log(`                                                                                        `);
console.log(`4] The Employee whose Salary is greter than 75000`);
arrayEmp.forEach(employee => {
    if (employee.emp_salary > 75000) {
        console.log(`Employee Name: ${employee.emp_name} , Company: ${employee.emp_company}, Salary: ${employee.emp_salary}`);
    }
});

console.log(`                                                                                        `);
console.log(`5] The Employee whose Salary is greter than or Equal 50000 and department is IT`);
arrayEmp.forEach(employee => {
    if (employee.emp_salary >= 50000 && employee.emp_dept=="IT") {
        console.log(`Employee details: ${employee.emp_id}, ${employee.emp_name}, ${employee.emp_dept}, ${employee.emp_salary}, ${employee.emp_company}`);
    }
});

console.log(`                                                                                        `);
console.log(`6] The Employee is working in Infy`);
arrayEmp.forEach(employee => {
    if (employee.emp_company=="Infy") {
        console.log(`Employee details: ${employee.emp_id}, ${employee.emp_name}, ${employee.emp_dept}, ${employee.emp_salary}, ${employee.emp_company}`);
    }
});