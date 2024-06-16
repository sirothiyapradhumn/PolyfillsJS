const person101 = {
    name: 'Chiku',
    age: '9'
}
const person102 = {
    name: 'Sharad',
    age: '16'
}

function introduce (hobby, city) {
    console.log(`My name is ${this.name}, age ${this.age}. Live in ${city} have hobby ${hobby}.`);
}

// default apply
introduce.apply(person101, ['play games', 'Mihona']);
introduce.apply(person102, ['Table Tennis', 'Gwalior']);

// myApply polyfill
Function.prototype.myApply = function(context = {}, args = []) {
    if( typeof this !== "function") {
        throw new Error(this + " it's not callable");
    }

    if(!Array.isArray(args)) {
        throw new Error(args + " is not a array");
    }

    context.fn = this;
    context.fn(...args);
}

introduce.myApply(person102, ['Table Tennis', 'Gwalior']);


