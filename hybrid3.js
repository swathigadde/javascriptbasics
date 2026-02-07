class Shop {
    constructor(name,place){
        this.name=name;
        this.place=place;
    }

    add1(){
        console.log(`Name of the Shop: ${this.name} and Place: ${this.place}`)
    }
}

const sh = {
    add2(work,sal){
        this.work=work;
        this.sal=sal;
console.log(`Work: ${this.work} and Salary ${this.sal}`)
            }
}

class shop2 extends Shop{
display(){
    console.log("welcome to the Retail Store")
}

}
Object.assign(shop2.prototype,sh)
let obj= new shop2('Walmart','Dallas')
//obj1 = new shop2()
//obj1.display();
//obj1.add2('Manager', 10000);
obj.display();
obj.add1();
obj.add2('Manager', 10000);
