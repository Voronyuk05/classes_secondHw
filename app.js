class Animal {
    #name;
    #age;
    constructor(name,age) {
        this.#name = name;
        this.#age = age;
    }
    getAge() {
        return this.#age;
    }
    getInfo() {
        return `Name: ${this.#name}, Age: ${this.#age}`;
    }
}

class Dog extends Animal {
    static legsCount = 4;
    bark() {
        return 'Woof!';
    }
}

class GuideDog extends Dog {
    #isTrained;
    constructor(name,age, isTrained) {
        super(name,age);
        this.#isTrained = isTrained
    }
    leadBlind() {
        return "Following the guide dog";
    }
    getInfo() {
        console.log(`${super.getInfo()}, Legs count: ${Dog.legsCount}, Trained: ${this.#isTrained}`);
    }
}

const dog1 = new GuideDog("Goofy", 9, true);
dog1.getInfo()
console.log(dog1.bark())
