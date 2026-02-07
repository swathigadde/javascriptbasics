class hyb1 {
    map(){
        console.log('Welcome to USA Maps');
    }
}

const obj1 = {
    Hello(){
        console.log('Welcome to IND Maps')
    }
}

class child extends hyb1{

}

Object.assign(child.prototype,obj1)
const obj2 = new child()
obj2.Hello();
obj2.map();
