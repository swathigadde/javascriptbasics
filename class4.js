class kitchen {
    constructor(appliances,usage){
        this.appliances=appliances;
        this.usage=usage;
    }
storage(){
    console.log(`${this.appliances} usage ${this.usage}`);
}
}
let app1= new kitchen('Refridegrator','FULL');
let app2= new kitchen('Microwave','Medium');
let app3= new kitchen('Stove', 'FULL');
let app4 = new kitchen('Kattle','LOW');
app1.storage();
app2.storage();
app3.storage();
app4.storage();