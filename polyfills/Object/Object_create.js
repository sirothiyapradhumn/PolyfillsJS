const obj1 = {
    key: 1,
    sayHello() {
        return 'Hello';
    },
};

// const newObj1 = Object.create(obj1);
// console.log('newObj1', newObj1);
// console.log('newObj1 Key', newObj1.key);
// console.log('newObj1 sayHello', newObj1.sayHello());

Object.prototype.myCreate = function (proto) {
    if (proto === null || typeof proto !== 'object') {
        throw new Error('Argument must be the object, or null');
    }
    function F() { };
    F.prototype = proto;
    return new F();
}


const newObj1 = Object.myCreate(obj1);
console.log('newObj1', newObj1);
console.log('newObj1 Key', newObj1.key);
console.log('newObj1 sayHello', newObj1.sayHello());
