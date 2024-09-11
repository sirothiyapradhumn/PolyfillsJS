const arr = [10, 11, 12, 13, 14, 15];
// const res = arr.push(17,18,19);
// console.log(res);
// console.log(arr);


Array.prototype.myPush = function(...elements) {
    if(this == null) {
        throw new TypeError('pls input correct ARR');
    }

    const inputArr = Object(this);
    let inputArrLen = inputArr.length;

    for(let i = 0; i<elements.length; i++) {
        this[inputArrLen] = elements[i];
        inputArrLen++;
    }

    this.length = inputArrLen;

    return inputArrLen;
}


const res = arr.myPush(17,18,19);
console.log(res);
console.log(arr);