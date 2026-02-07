class car {
    constructor (model,color){
        this.model=model;
        this.color=color;
            }

            congrts(){
                console.log(`congrats for you new car: ${this.model} and ${this.color}`)
            }
}

const car1= new car('BMW','RED');
const car2=new car('AUDI','white');
car1.congrts();
car2.congrts();
