const arr = [10, 11, 12, 13, 14, 15];
// const res = arr.findIndex((ele)=> ele === 15);
// console.log(res);

if(!Array.prototype.customFindIndex) {
    Array.prototype.customFindIndex = function(callbackFn, thisArg) {
        if(this == null) {
            throw new TypeError('pls pass correct arr');
        }

        const inputArr = Object(this);
        if(!inputArr.length) return -1;

        for(let i=0; i<inputArr.length; i++) {
            if(callbackFn.call(thisArg, inputArr[i])) {
                return i;
            }
        }

        return -1;
    }
};

const res1 = arr.customFindIndex((ele)=> ele === 15);

console.log(res1);