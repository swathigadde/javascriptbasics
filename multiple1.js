const wel = {
    welcome(name){
        this.name= name;
        console.log(`Welcome to My House: ${this.name}`);
            }
}
const addr = {
    address(addre){
        this.addre=addre
        console.log(`My Home address: ${this.addre}`)
    }
}

var1 = Object.assign({},wel,addr)
var1.welcome('Anshul');
var1.address('Dallas');