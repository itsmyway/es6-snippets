describe("CLASS", function(){
  it("can have a constructor", function(){
    class Employee {
      constructor(name){
        this._name = name;
      }
      doWork() {
        return "complete!";
      }
      getName(){
        return this._name;
      }
    }

    let e1 = new Employee("Scott");
    let e2 = new Employee("Alex");

    expect(e1.getName()).toBe("Scott");
    expect(e2.getName()).toBe("Alex");
  });

  it("can have getters and setters", function(){
    class Employee {
      constructor(fname, lname){
        this._fname = fname;
        this._lname = lname;
      }
      doWork() {
        return "complete!";
      }
      getFullName(){
        return this._fname + " " + this._lname;
      }
      get fname(){
        return this._fname;
      }
      get lname(){
        return this._lname;
      }
      set lname(newLname){
        this._lname = newLname;
      }
    }

    let e1 = new Employee("Scott", "Bob");
    let e2 = new Employee("Alex", "Kyle");

    expect(e1.fname).toBe("Scott");
    expect(e1.getFullName()).toBe("Scott Bob");

    e2.lname = "Chris";
    expect(e2.lname).toBe("Chris");
  });

  it("inheritance - can have base class", function(){
    class Person {
        constructor (name){
          this.name = name;
        }
        get name(){
          return this._name;
        }

        set name(newName){
          if(newName) {
            this._name = newName;
          }
        }
    }

    class Employee extends Person{
      doWork(){
        return `${this._name} is working`;
      }
    }

    let p1 = new Person("Scott");
    let e1 = new Employee("Alex");

    expect(p1.name).toBe("Scott");
    expect(e1.name).toBe("Alex");
    expect(e1.doWork()).toBe("Alex is working");
  });

  it("inheritance - can invoke super methods", function(){
    class Person {
        constructor (name){
          this.name = name;
        }
        get name(){
          return this._name;
        }

        set name(newName){
          if(newName) {
            this._name = newName;
          }
        }
    }

    class Employee extends Person{
      constructor(name, title){
        super(name);
        this._title = title
      }
      get title(){
        return this._title;
      }
      doWork(){
        return `${this._name} is working`;
      }
    }

    let p1 = new Person("Scott");
    let e1 = new Employee("Alex", "Dev");

    expect(p1.name).toBe("Scott");
    expect(e1.name).toBe("Alex");
    expect(e1.doWork()).toBe("Alex is working");
    expect(e1.title).toBe("Dev");
  });

  it("inheritance - can have overrides", function(){
    class Person {
        constructor (name){
          this.name = name;
        }
        get name(){
          return this._name;
        }

        set name(newName){
          if(newName) {
            this._name = newName;
          }
        }

        doWork(){
          return `${this._name} is free`;
        }

        toString(){
          return this._name;
        }
    }

    class Employee extends Person{
      constructor(name, title){
        super(name);
        this._title = title
      }
      get title(){
        return this._title;
      }
      doWork(){
        //can call super() or super.doWork() if not interested in overrides
        return `${this._name} is working`;
      }

      toString(){
        return this._name;
      }
    }

    let p1 = new Person("Scott");
    let e1 = new Employee("Alex", "Dev");

    expect(p1.name).toBe("Scott");
    expect(e1.name).toBe("Alex");
    expect(p1.doWork()).toBe("Scott is free");
    expect(e1.doWork()).toBe("Alex is working");
    expect(e1.title).toBe("Dev");
    expect(p1.toString()).toBe("Scott");
    expect(e1.toString()).toBe("Alex");

    let makeEveryoneWork = function(...people){
      let results = [];
      for(let i=0; i<people.length; i++) {
        if (people[i] instanceof Person) { // can also do people[i].doWork
          results.push(people[i].doWork());
        }
      }
      return results;
    }

    expect(makeEveryoneWork(p1, e1, {})).toEqual(["Scott is free", "Alex is working"])
  });
});
