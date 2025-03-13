let obj = {
    a : 12,
    b : 5
}

console.log(obj);

let animal = {
    eats : true
};

let rabbit = {
    jumps : true
};

// console.log(animal.eats); //o/p = true
// console.log(animal.jumps); //o/p = undefined
// console.log(rabbit.eats); //o/p = undefined
// console.log(rabbit.jumps); //o/p = true

rabbit.__proto__ = animal; // sets rabbit.[[Prototype]] = animal
//Prototype is just adding properties of one ibject to another

console.log(animal.eats); //o/p = true
console.log(animal.jumps); //o/p = undefined
console.log(rabbit.eats); //o/p = true
console.log(rabbit.jumps); //o/p = true