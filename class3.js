class house{
    constructor(housetype,area){
        this.housetype=housetype;       
        this.area=area;
    }
    housename(){

       console.log(`House Type is ${this.housetype} and Area of the house is ${this.area}`)
    }
}

const housetype1=new house('Double Story',4555)
const housetype2=new house('Ranch',2000);
const housetype3=new house('Single Story',3500)
const housetype4=new house('Triple story',6000)
const housetype5=new house('Mega mansion',25000)
housetype1.housename();
housetype2.housename();
housetype3.housename();
housetype4.housename();
housetype5.housename();