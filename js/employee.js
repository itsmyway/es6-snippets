//let s_name = Symbol();

export class Employee{
  constructor(name){
    this._name = name;
  }
  get name(){
    return this._name;
  }
  doWork(){
    return `${this.name} is working`;
  }
}

export let log = function(employee){
  console.log(employee.name);
}

export let modelEmployee = new Employee("Allen");
