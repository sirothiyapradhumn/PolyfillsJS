const arr = [10, 11, 12, 13, 14, 15];
// const res = arr.forEach((ele) => {
//     console.log(ele*ele);
// });
// console.log(res);


Array.prototype.myForEach = function(callbackFn, thisArg) {
    if(this == null) {
        throw new TypeError('pls input correct ARR');
    }

    const inputArr = Object(this);

    for(let i = 0; i<inputArr.length; i++) {
        callbackFn.call(thisArg, inputArr[i]);
    }
}


const res = arr.myForEach((ele) => {
    console.log(ele*ele);
});
console.log(res);