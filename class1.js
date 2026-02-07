class studentdata {  //Parent class
    constructor (name,age){
        this.name=name;
        this.age=age;
        }

        greet(){
        console.log(`Hello My Name: ${this.name} and My Age: ${this.age}`)
        }

}
class school extends studentdata{ //chid class extends features from Parent class
    constructor (name, age, place){ 
        super (name,age); //refering to parent class constructor
        this.place=place; //initalizing the variables
    }
    place1(){
        console.log(`Location: ${this.place}`); //fuction
    }
    
}

/*const student1 = new studentdata('swathi',36);
const student2 = new studentdata('Vihaan',9);
student1.greet();
student2.greet();*/
const student3 = new school('swathi',36,'Dallas'); // instantiation the object class student3 and student4 are the reference
const student4= new school('Vihaan',19,'Celina');
student3.greet(); //calling functions for difrent test data
student3.place1();
student4.greet();
student4.place1();
