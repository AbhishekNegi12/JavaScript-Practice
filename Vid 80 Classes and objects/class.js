class Animal{
    constructor(name){
        this.name = name;
        console.log("Object is created...");
    }

    //Functions
    eats(){
        console.log("Khaa rh hun");
    }
    jump(){
        console.log("kud rh hun");
    }
}
class Lion extends Animal{
    constructor(name){
        super(name);
        // this.name = name;
        console.log("Object is created and he is a Lion");
    }
    eats(){
        console.log("Khaa rh hun roar.........");
    }
}
let a = new Animal("Hola Amigo");
console.log(a);
console.log(a.name);

let l = new Lion("Shera");
console.log(l);
console.log(l.name);