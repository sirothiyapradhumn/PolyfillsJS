const arr = [10, 11, 12, 13, 14, 15];
// const res = arr.every((ele)=> ele < 16);
// console.log(res);


if(!Array.prototype.myEvery) {
    Array.prototype.myEvery = function(callBackFn, thisArg) {
        if(this == null) {
            throw new TypeError('pls input corr ect ARR');
        }

        const inputArr = Object(this);
        if(!inputArr.length) return false;

        for(let i = 0; i<inputArr.length; i++) {
            if(callBackFn.call(thisArg, inputArr[i])) {
                return true;
            } else {
                return false;
            }
        }
        return false;
    }
}

const res1 = arr.myEvery((ele)=> ele === 14);
console.log(res1);