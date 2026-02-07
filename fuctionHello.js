class Hello{
    constructor (str) {
        this.str=str;
    }
display(){
    //return (`${this.str}`);
    console.log(this.str);
}
}
let str1 = new Hello('Hello World');
str1.display();
// console.log(str1);

