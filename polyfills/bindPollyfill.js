const person101 = {
    name: 'Chiku',
    age: '9'
}
const person102 = {
    name: 'Sharad',
    age: '16'
}

function introduce (hobby, city) {
   return `My name is ${this.name}, age ${this.age}. Live in ${city} have hobby ${hobby}.`;
}

// default bind
const chikuBind = introduce.bind(person101, 'play games', 'Mihona');
console.log(chikuBind());


// myBind polyfill
Function.prototype.myBind = function(context = {}, ...args) {
    if( typeof this !== "function") {
        throw new Error(this + "it's not callable");
    }
    context.fn = this;
    return function(...newArgs) {
        return context.fn(...args, ...newArgs);
    }
    
}
const sharadMyBind = introduce.myBind(person102, 'Table Tennis', 'Gwalior');
console.log(sharadMyBind());

const sharadMyBind1 = introduce.myBind(person102, 'Table Tennis');
console.log(sharadMyBind1('Gwalior'));

const sharadMyBind2 = introduce.myBind(person102);
console.log(sharadMyBind2('Table Tennis', 'Gwalior'));