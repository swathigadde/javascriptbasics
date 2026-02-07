let kitchen1 = {
    kit(app1){
        this.app1=app1
console.log(`Kitchen Appliance1: ${this.app1}`)
    }
}
let kitchen2 = {
    kit1(app2){
        this.app2=app2;
        console.log(`Kitchen Appliance2: ${this.app2}`)
    }
}
let kitchen3 = {
    kit2(app3){
        this.app3=app3;
        console.log(`Kitchen Appliance2: ${this.app3}`)
    }
}

const ob1 = Object.assign({},kitchen1,kitchen2,kitchen3)
ob1.kit('Refridgerator');
ob1.kit1('Microwave');
ob1.kit2('Oven');
