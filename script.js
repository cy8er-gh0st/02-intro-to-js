//part 1

const company = "arasaka";
let numberOfEmployees = 25000;
let headOffice = null;
let CEO = undefined;
let isBiggestCompany = true;

let adamSmasher = {
    name: "Adam",
    height: 205, 
    job: "mercenary"
};

let propertyName = "job";

adamSmasher.salary = 1000000;

delete adamSmasher.height;

console.log(adamSmasher[propertyName]);

//part 2

let vehicle = {};

vehicle.brandName = "subaru";
vehicle.model = "impreza";
console.log(vehicle.model);
vehicle.model = "legacy";
console.log(vehicle.model);
delete vehicle.model;
console.log(vehicle);

//part 3 

let salaries = {
	Aroo: 100,
	Dalida: 160,
	Samat: 130
}
let sum = 0;
for(let key in salaries){
    sum += salaries[key];
}

console.log(sum);