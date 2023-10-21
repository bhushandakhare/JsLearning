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

const listSalary=arrayEmp.filter((employee)=>{
    return employee.emp_salary
}).map((employee)=>{
    return employee.emp_salary
})

console.log(`List Of All Employee Salary: ${listSalary}`);


const listDept=arrayEmp.filter((employee)=>{
    return employee.emp_dept
}).map((employee)=>{
    return employee.emp_dept
})

console.log(`List Of All Employee Departments: ${listDept}`);

const listId=arrayEmp.filter((employee)=>{
    return employee.emp_id
}).map((employee)=>{
    return employee.emp_id
})

console.log(`List Of All Employee Id's: ${listId}`)