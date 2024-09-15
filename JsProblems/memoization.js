//Memoize w/o clouser
let cache = {};
const memoize = (n) => {
    if(n in cache) {
        return cache[n];
    } else {
        cache[n] = n+80;
        return cache[n];
    }
}

console.log(memoize(5));
console.log(memoize(5));

//Memoize with clouser
const memoizeClouser = (n) => {
let cache = {};
return () => {
        if(n in cache) {
            return cache[n];
        } else {
            cache[n] = n+80;
            return cache[n];
        }
    }
}

console.log(memoizeClouser(8)());
console.log(memoizeClouser(8)());