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

// default call
introduce.call(person101, 'play games', 'Mihona');
introduce.call(person102, 'Table Tennis', 'Gwalior');

// myCall polyfill
Function.prototype.myCall = function(context={}, ...args) {
    if( typeof this !== "function") {
        throw new Error(this + "it's not callable");
    }
    context.fn = this;
    context.fn(...args);
}

introduce.myCall(person102, 'Table Tennis', 'Gwalior');


