class Animal {
    Speak (){
        console.log("Animal Makes Sound");
    }
}
class Dog extends Animal {
    Speak(){
        console.log("Dog Can Bark");
    }
}

const dogobj= new Dog()
dogobj.Speak();
const animalobj = new Animal()
animalobj.Speak();
