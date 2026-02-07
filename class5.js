class school {
    constructor(classes,sport){
        this.classes=classes;
        this.sport=sport;
    }
worker(){

return(`The ${this.classes} students Play ${this.sport}`);

    //console.log(`The ${this.classes} students Play ${this.sport}`);
}

}

let cls1= new school('1st Grade', 'Scoccer');
let cls2 = new school('2nd Grade','Basketball');
let cls3 = new school('3rd Grade', 'Baseball');
let opt = cls1.worker();
console.log(opt);
/*cls1.worker();
cls2.worker();
cls3.worker();*/
