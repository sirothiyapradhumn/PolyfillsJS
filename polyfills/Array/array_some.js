const arr = [10, 11, 12, 13, 14, 15];
// const res = arr.some((ele)=> ele > 15);
// console.log(res);


if(!Array.prototype.mySome) {
    Array.prototype.mySome = function(callBackFn, thisArg) {
        if(this == null) {
            throw new TypeError('pls input correct ARR');
        }

        const inputArr = Object(this);
        if(!inputArr.length) return false;

        for(let i = 0; i<inputArr.length; i++) {
            if(callBackFn.call(thisArg, inputArr[i])) {
                return true;
            }
        }
        return false;
    }
}

const res1 = arr.mySome((ele)=> ele > 14);
console.log(res1);