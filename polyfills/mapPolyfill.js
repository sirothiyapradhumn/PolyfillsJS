const arr= [2, 3, 4, 5, 8];


Array.prototype.myMap = function(callbackFn) {
  let temp = [];
  for( let i =0; i<this.length; i++) {
    temp.push(callbackFn(this[i], i, this));
  }
  return temp;
}

const sqrArray = arr.map((ele) => ele*ele);
console.log('Default map sqrArray', sqrArray);

const sqrArrayMyMap = arr.myMap((ele) => ele * ele);
console.log('My map sqrArray', sqrArrayMyMap);