const arr = [10, 11, 12, 13, 14, 15];
// const res = arr.pop();
// console.log(res);
// console.log(arr);


Array.prototype.myPop = function() {
    if(this == null) {
        throw new TypeError('pls input correct ARR');
    }

    const removedItem = this[this.length-1];
    this.length = this.length - 1;

    return removedItem;
}


const res = arr.myPop();
console.log(res);
console.log(arr);