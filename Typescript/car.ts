class car1 {
    private brand: string ;
    constructor(brand: string) {
    this.brand=brand;
    }
   getbrand(): string{
    return this.brand;
   }
}
let var1 = new car1('Mazada')
console.log('Model of the Parent car :', var1.getbrand())
class electriccar1 extends car1{
    battery: number;
        constructor(brand : string,battery: number){
        super (brand)
        this.battery = battery
    }
    getdisplay(): number {
       return this.battery;
    }
}
let var2 = new electriccar1('Tesla', 1000)
console.log('Modelof the child car :', var2.getbrand())
console.log('Battery live in min : ',var2.getdisplay())
