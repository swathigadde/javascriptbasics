class insurance{
    #coverage;
    constructor (coverage,name){
        this.#coverage=coverage;
        this.name=name;
    }
details(cover1){

    this.#coverage = cover1;
   
    console.log(`The name of the person coverage  ${this.#coverage} and ${this.name}`)
}

updateddetails(){
      return this.#coverage
}

}
const ref1 = new insurance('Co-Pay','Swathi')
ref1.details('Full Pay');
ref1.updateddetails();
