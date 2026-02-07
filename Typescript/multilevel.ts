class par1{
    Parentname: string ;
    Parentage: number;
       constructor (Parentname: string, Parentage: number) {
        this.Parentname = Parentname;
        this.Parentage = Parentage;
        }
    Parentdisplay(): {key1: string,Key2: number} {
        return  {
            key1: this.Parentname,
            Key2: this.Parentage
    }
    
}
}
class child1 extends par1{
    childname: string;
        constructor(Parentname: string, Parentage: number, childname: string){
        super (Parentname, Parentage);
        this.childname = childname;
    }
    childdispalay():{key3: string, key4: number,key5: string}{
        return{
            key3: this.Parentname,
            key4: this.Parentage,
            key5: this.childname
        }
    }
}

var var23 = new child1('Swathi',35,'Vihaan');
console.log(var23.Parentdisplay());
console.log(var23.childdispalay());