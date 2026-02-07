class Retail{
    constructor(name,place){
        this.name=name;
        this.place=place;
    }

shops(){
    console.log (`The RetailShop ${this.name} is in the Location ${this.place}`);
}
}

const name1= new Retail('Walmart','Prosper'); //Instantation of the class
const name2 = new Retail('Target', 'Frisco');
const name3= new Retail('HEB','Celina');
name1.shops();
name2.shops();
name3.shops();