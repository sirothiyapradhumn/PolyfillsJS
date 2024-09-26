// normal funciton 

const multiple = (a,b,c) => a*b*c;
console.log(multiple(2,2,2));

//currying variations
const multiple1 = (a) => (b) => a*b;
console.log(multiple1(2)(2));

//curring take as arrgrumnet (a,b) & (a)(b)
const add = (a,b) => {
    return a+b;
};
console.log(add(2,4));

const add1 = (a) => {
    return (b) => {
        return a+b;
    }
};
console.log(add1(2)(3));

function addition(x) {
  if (arguments.length > 1) {
    let sum = 0;
    for (let i = 0; i < arguments.length; i++) {
      sum += arguments[i];
    }
    return sum;
  } else {
    return function (y) {
      return x + y;
    };
  }
}

console.log(addition(10)(20));
console.log(addition(10, 20));


// infinite currying;
const sum = (a) => (b) => b ? sum(a+b) : a;
console.log(sum(2)(3)(4)())