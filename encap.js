class car {
    #color
    constructor (color, brake){
        this.#color=color
        this.brake=brake;
    }
    Modify(updatecolor){
        this.#color=updatecolor;
        console.log(`updated color is ${this.#color}`)
    }
getupdatedcolor(){

    return this.#color
}

    }
const ob1= new car('Red',1)
   
    ob1.Modify('Yellow');
    ob1.getupdatedcolor();
// console.log(ob1.#color) //Error because color is declated to be private in the car class
