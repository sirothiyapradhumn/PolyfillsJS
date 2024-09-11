const arr = [10, 11, 12, 13, 14, 15];
// const res = arr.reduce((acc, ele) => acc+ele, 0);
// console.log(res);


Array.prototype.myReduce = function(callbackFn, initalval, thisArg) {

    let accumulator = initalval;
    for(let i=0; i<this.length; i++) {
        accumulator = accumulator ? callbackFn.call(thisArg, accumulator, this[i]) : this[i];
    }

    return accumulator;
}


const res = arr.myReduce((acc, ele) => acc+ele, 0);
console.log(res);
