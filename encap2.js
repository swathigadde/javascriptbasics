class bank {
    #cash
    constructor (cash, name){
        this.#cash=cash
        this.name=name;
    }
    amount(cash1){
        this.#cash=cash1;
        console.log(`updated cash is ${this.#cash}`)
    }
getupdatedcash(){

    return this.#cash
}

    }
const ob1= new bank(200,'Swathi')
       ob1.amount('300');
    ob1.getupdatedcash();
    