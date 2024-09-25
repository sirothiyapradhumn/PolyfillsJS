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


const memoized = (cbFn) => {
    const cache = {};
    return (...args) => {
        const key = args.sort((a,b) => a-b).join("_")
        if(key in cache) {
            return console.log('return from cache', cache[key]);
        }
        cache[key] = cbFn(args[0], args[1]);
        return console.log('resister on cache', cache[key]);
    }
}

const sum = (a,b) => a+b;
const test = memoized(sum);
const t1 = test(10,20);
const t2 = test(10,20);
const t3 = test(20,10);
