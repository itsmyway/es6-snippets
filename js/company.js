import {Employee} from './employee';

export class Company{
  hire(...names){
    this.employees = names.map((name) => new Employee(name));
    console.log(this.employees);
  }
  doWork(){
    this.emp_work = [];
    //both below worked
    //this.emp_work = this.employees.map((emp) => emp.doWork());
    for (let Employee of this.employees) {
      this.emp_work.push(Employee.doWork());
    }
  //return [ for(let e of this.employees) e.doWork() ];
  return this.emp_work;
  }
}
