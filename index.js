let person = {
    firstName: "Chandler",
    lastName: "Bing",
    age: 34
}

// console.log(person.firstName)

let meal = {
    appetizer: "Cactus blossom",
    entree: "Steak",
    dessert: "Ice cream",
    drink: "Coke"
}

// const dessert = meal.dessert
const {dessert} = meal

// console.log(dessert)

const {appetizer, drink: bestDrinkEver, entree} = meal

// console.log(appetizer, bestDrinkEver, entree)

// for (let key in meal) {
//     console.log(`For my ${key} I had ${meal[key]}`)
// }

person.job = "Statistical Analysis and Data Reconfiguration"

// person.pets = ["Duck", "Chicken"] 
person["pets"] = ["Duck", "Chicken"]

console.log(person.pets[0])
// console.logs Duck

delete meal.dessert
// have to delete the const dessert above to completely delete




//class CLASSNAME {
//  constructor(VALUES FROM INSTANCE) {
//    this.KEY = VALUE
//  }

//  METHODNAME(PARAMS){
//   CODE BLOCK
//  }
//}

// Classes
class Pet {
    constructor(name, age) {
        this.name = name
        this.age = age
    }
}

class Dog extends Pet {
    constructor(name, age, breed) {
        super(name, age) // super() calls the class from above with the values

        this.breed = breed
    }

    bark() {  // bark is the name we give the method you can name it whatever
        console.log(`Bark! My name is ${this.name}.`)
    }
}

let gus = new Dog("Gus", 2, "Bernedoodle")

console.log(gus)

gus.bark()