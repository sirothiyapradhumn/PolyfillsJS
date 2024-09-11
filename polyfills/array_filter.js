const arr = [10, 11, 12, 13, 14, 15];
// const res = arr.filter((ele) => ele > 11);
// console.log(res);


Array.prototype.myFilter = function(callbackFn, thisArg) {

    const tempArr = [];
    
    if(this == null) {
        throw new TypeError('pls input correct ARR');
    }

    const inputArr = Object(this);

    for(let i = 0; i<inputArr.length; i++) {
        if(callbackFn.call(thisArg, inputArr[i])) {
            tempArr.push(inputArr[i]);
        }
    }

    return tempArr;
}


const res = arr.myFilter((ele) => ele < 14);
console.log(res);