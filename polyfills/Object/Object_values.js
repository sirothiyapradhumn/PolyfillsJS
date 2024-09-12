var obj1 = {
    a: 1,
    b: 2,
    c: 3,
    d: 'apple',
};

// const obj1values = Object.values(obj1);
// console.log(obj1values);

Object.prototype.myValues = function (obj) {
    if (obj === null || typeof obj !== 'object') {
        throw new Error('Argument must be the object, or null');
    }

    const values = [];

    for (const prop in obj) {
        if (Object.hasOwnProperty.call(obj, prop)) {
            values.push(obj[prop]);
        }
    }

    return values;
}

const obj1values = Object.myValues(obj1);
console.log(obj1values);