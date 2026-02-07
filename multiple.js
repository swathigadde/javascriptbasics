const multiple = {
    greet(){
        console.log('Hello Parent1');
    }
}

const multiple1 = {
    greet1(){
 console.log('Hello Multiple1');
    }
}

const var1 = Object.assign({},multiple,multiple1) // we can have multiple level inher by using object.assign({},obj1,obj2)

var1.greet();
var1.greet1();
