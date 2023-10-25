console.log(
  `==================================== Assignment Reduce B ==================================== `
);
console.log(
  `                                                                                           `
);

class Employee {
  constructor(emp_id, emp_name, emp_dept, emp_salary, emp_company) {
    this.emp_id = emp_id;
    this.emp_name = emp_name;
    this.emp_dept = emp_dept;
    this.emp_salary = emp_salary;
    this.emp_company = emp_company;
  }
}
const emp_anil = new Employee(22, "Anil", "IT", 50000, "TCS");
const emp_radha = new Employee(33, "Radha", "HR", 74000, "Wipro");
const emp_rishi = new Employee(55, "Rishi", "Finance", 47000, "TCS");
const emp_sonali = new Employee(66, "Sonali", "Finance", 45000, "Infy");
const emp_monika = new Employee(77, "Monika", "IT", 40000, "Wipro");
const emp_viny = new Employee(88, "Vinayak", "IT", 75000, "TCS");
const emp_mahi = new Employee(99, "Mahesh", "HR", 85000, "Infy");

const arrayEmployee = [
  emp_anil,
  emp_radha,
  emp_rishi,
  emp_sonali,
  emp_monika,
  emp_viny,
  emp_mahi,
];

const empWipro = arrayEmployee.filter((employee) => {
  return employee.emp_company == "Wipro";
});
const object = empWipro.map((value) => {
  return value.emp_name;
});
console.log(`1] Employee from Wipro: ${object}`);

const empBoth = arrayEmployee.filter((employee) => {
  return employee.emp_dept == "IT" || employee.emp_dept == "HR";
});
const object1 = empBoth.map((value) => {
  return value.emp_name;
});
console.log(`2] Employee from "IT" or "HR": ${object1}`);

const empGreater = arrayEmployee.filter((employee) => {
  return employee.emp_id > 50;
});
const object2 = empGreater.map((value) => {
  return value.emp_name;
});
console.log(`3] Employee ID is greater than 50 : ${object2}`);

const empStartsWith = arrayEmployee.filter((employee) => {
  return (
    employee.emp_name.startsWith("A") ||
    employee.emp_name.startsWith("V") ||
    employee.emp_name.startsWith("M")
  );
});
const object3 = empStartsWith.map((value) => {
  return value.emp_name;
});
console.log(`4] Employee Name starts With A, V and M  : ${object3}`);

const average = arrayEmployee.map((currentValue) => {
  return currentValue.emp_salary;
});
const object4 = average.reduce((runningTotal, value) => {
  return runningTotal + value;
});
console.log(
  `5] Average Salary of of the employee for all the Departments: ${
    object4 / average.length
  }`
);

const itEmployee = arrayEmployee.filter((employee) => {
  return employee.emp_dept == "IT";
});
const itEmployeeMap = itEmployee.map((currentValue) => {
  return currentValue.emp_salary;
});
const object5 = itEmployeeMap.reduce((runningTotal, value) => {
  return runningTotal + value;
});
console.log(`Average Salary of IT Department:${object5 / itEmployee.length}`);
