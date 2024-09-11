const arr = [10, 11, 12, 13, 14, 15];
// const res = arr.unshift(17,18,19);
// console.log(res);
// console.log(arr);


Array.prototype.myUnshift = function(...elements) {
    if(this == null) {
        throw new TypeError('pls input correct ARR');
    }

    const inputArr = Object(this);
    let inputArrLen = inputArr.length;
    const tempArr = [...elements, ...inputArr];
    for(let i = 0; i<tempArr.length; i++) {
        this[i] = tempArr[i];
    }
    
    this.length = tempArr.length;

    return tempArr.length;
}


const res = arr.myUnshift(17,18,19);
console.log(res);
console.log(arr);