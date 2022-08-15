// Task -1 

let mentor = { 
    course: "JS fundamental", 
    duration: 3,
    direction: "web-development" 
};

function propsCount(currentObject){
    return Object.keys(currentObject).length;

} 


console.log(propsCount(mentor)); 


// Task -2 

let worker = { 
    name: "Alex", 
    lastName: "Vat",
    direction: "developer",
    birth : 1984, 
    passport : "KO101010" 
}

function showProps(currentObj){
    let arrKey = [];
    let arrValue = [];
    
    for (let key in currentObj) {
        arrKey.push(key) ;  
        arrValue.push(currentObj[key]); 
      }

    console.log(arrKey);
    console.log(arrValue);  
}

showProps(worker);


// Task -3

class Person {

    constructor(name, surname) {
      this.name = name;
      this.surname = surname;
    }
  
    showFullName() {
      return this.name+' '+this.surname;
    }
  }

  let Myclass = new Person('Tom','Tomson');
  console.log(Myclass.showFullName());

  class Student extends Person {
    constructor(name, surname, year){
        super(name, surname);
        this.year = year;
    }
    showFullName(midlname){
        return super.showFullName() +' '+ midlname; 
        //console.log(midlname);
    }
    showCourse(){
      let curDate = new Date();
      return curDate.getFullYear() - this.year;  
    }
  }
  
  let st = new Student('Tom','Tomson', 2020);
  console.log(st.showFullName('Petrovych'));
  console.log('Current course: ' + st.showCourse());

  
  // Task -4
  const workerList  = [];

  class Worker {

    constructor(fullName, dayRate, workingDays) {
      this.fullName = fullName;
      this.dayRate = dayRate;
      this.workingDays = workingDays; 
      workerList.push(this);     
    }

    #experience = 1.2;

    showName(){
        return this.fullName; 
    }   

    showSalary() {
      return this.dayRate*this.workingDays;
    }

    showSalaryWithExperience(){
        return this.dayRate*this.workingDays * this.#experience ;    
    }

    set experience(newValue) {
        if (newValue < 0) {
            newValue = 1.2;
        }
        this.#experience = newValue;
      }
    
    get experience() {
        return this.#experience;
    }
  }

  let wk = new Worker('Tom Tomson', 100, 15);
  console.log(wk.showName() +' salary:  ' + wk.showSalary());
  console.log(wk.showName() +' salary:  ' + wk.showSalaryWithExperience());
  console.log(wk.showName() +' Old experience:  ' +wk.experience);
  wk.experience = 1.5;
  console.log(wk.showName() +' salary with new : ' + wk.showSalaryWithExperience());
  console.log(wk.showName() +' New experience:  ' +wk.experience);
  
  let wk2 = new Worker("Nick Anderson", 95, 22);
  wk2.experience = 1.3;

  let wk3 = new Worker("John Dou", 105, 17);
  wk3.experience = 1.6;

console.log(workerList);  

//console.log(workerList.sort(byField('#experience')));
console.log(workerList.sort((a, b) => a.experience > b.experience ? 1 : -1));
workerList.forEach(function(elem){console.log(elem.fullName+' salary : '+elem.showSalary() ); });



// Task -5 

class GeometricFigure {
      getArea() {
       return 0;
      }

      toString() {
        return Object.getPrototypeOf(this).constructor.name;
     }
 }

 class Triangle extends GeometricFigure {
      constructor (side, height) {
                 super();
                 this.side = side;
                 this.height = height;
      }
      getArea() {
        return 0.5 * this.side * this.height;
       } 
 }

 class Square extends GeometricFigure {
        constructor (side) {
          super();
          this.side = side;         
      }
      getArea() {
          return  this.side * this.side;
      } 
 }

 class  Circle extends GeometricFigure{
        constructor (radius) {
             super();
             this.radius = radius;         
            }
        getArea() {
             
             return  Math.PI * this.radius  * this.radius;
            } 

 }

 const figures = [new Triangle(5, 15), new Square(17), new Circle(20)];

function handleFigures(arrFigures){
  let allkol = 0;
  arrFigures.forEach(function(elem){
      if (elem instanceof GeometricFigure){
          console.log('Geometric figure:'+ elem.toString() + ' arrea:'+ elem.getArea()); 
          allkol += elem.getArea();      
       }
  })
   console.log('total area - '+allkol);
}


 handleFigures(figures);