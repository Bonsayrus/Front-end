// Дізнатись суму всіх зарплат користувачів.
// Об'єкт може містити невідому кількість департаментів та співробітників.

let company = {
    sales: [
        {name: 'John' , salary: 1000}, 
        {name: 'Alice', salary: 600}
    ],
    development: {
        web: [
            {name: 'Peter', salary: 2000}, 
            {name: 'Alex', salary: 1800}
        ],
        internals: [{name: 'Jack', salary: 1300}]
    }
};



function sumSalaries(department) {
    let sum = 0;
    if(Array.isArray(department)){
        for(let employee of department){
            sum += employee.salary;
        }
    return sum;
   } else{ 
        for(let subDepartment in department){
            sum += sumSalaries(department[subDepartment]);
        }
    return sum;
  }
}

console.log(sumSalaries(company)); 