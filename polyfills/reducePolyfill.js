
const arr = [2, 2, 2, 2, 2];

// default reduce for sum of arr ele
const sumAllReduce = arr.reduce((acc, ele) => acc+ele, 0);
console.log('default reduce for sum of arr ele', sumAllReduce);

//  MyReduce for sum of arr ele
Array.prototype.myReduce = function(cb, initalValue) {
    let accumulator = initalValue;

    for(let i = 0; i<this.length; i++) {
        accumulator = accumulator ? cb(accumulator, this[i], i, this) : this[i];
    }

    return accumulator;
};

const myReduceSum = arr.myReduce((acc, ele) => acc+ele, 0);

console.log('MyReduce for sum of arr ele', myReduceSum);