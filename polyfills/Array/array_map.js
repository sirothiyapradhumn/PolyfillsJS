const arr = [10, 11, 12, 13, 14, 15];
// const res = arr.map((ele) => ele*ele);
// console.log(res);


Array.prototype.myMap = function(callbackFn, thisArg) {

    const tempArr = [];
    
    if(this == null) {
        throw new TypeError('pls input correct ARR');
    }

    const inputArr = Object(this);

    for(let i = 0; i<inputArr.length; i++) {
       tempArr.push(callbackFn.call(thisArg, inputArr[i]));
    }

    return tempArr;
}


const res = arr.myMap((ele) => ele*ele);
console.log(res);