class grandparent{
    constructor(name,age){
        this.name=name;
        this.age=age;
            }
            greet(){
                console.log(`Hello Grandparent ${this.name} ! Age: ${this.age}`)
            }
}
class parent extends grandparent{
    constructor(name,age,place){
        super (name,age)
        this.place=place
    }
    greet1(){
        console.log(`Place: ${this.place}`)
    }
}
class child extends parent{
    constructor(name,age,place,location){
        super (name,age,place)
        this.location=location
    }
    greet2(){
        console.log ( `Location: ${this.location}`)
    }
}

const data1= new child ('Prasad',65,'India', 'AP');
const data2= new child ('Padma',55,'USA','TX');
data1.greet();
data1.greet1();
data1.greet2();
data2.greet();
data2.greet1();
data2.greet2();