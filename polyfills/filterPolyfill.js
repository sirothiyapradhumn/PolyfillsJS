const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// default filter for even no.
const evenFilter = arr.filter((ele) => ele % 2 === 0);
console.log('default filter for even no.', evenFilter);

// myFilter polyfill
Array.prototype.myFilter = function(cb) {
    let temp = [];
    for(let i = 0; i<this.length; i++){
        if(cb(this[i], i, this)) {
            temp.push(this[i]);
        }
    }
    return temp;
};

// myFilter polyfill even no.
const evenMyFilter = arr.myFilter((ele) => ele % 2 === 0 );
console.log('myFilter polyfill even no.', evenMyFilter);