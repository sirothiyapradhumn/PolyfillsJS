const tempArr = [1, 2, 3, 4, 5];

// const res = tempArr.includes(2);
// console.log(res);

if(!Array.prototype.customInclude) {
    Array.prototype.customInclude = function(searchVal) {
        if(this == null) {
            throw new TypeError('pls give proper arr')
        }

        const inputArr = Object(this);
        const inputArrLen = inputArr.length;
        if(!inputArrLen) {
            return false;
        }

        let idx = 0;
        
        while(idx < inputArrLen) {
            if(inputArr[idx] === searchVal) {
                return true;
            }
            idx++;
        }
        
        return false;
    }
}

const res1 = tempArr.customInclude(3);
console.log(res1);