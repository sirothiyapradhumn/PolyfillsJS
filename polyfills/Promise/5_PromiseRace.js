const test1 = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('I am resolved by test1');
        }, 3000);
    })
}

const test2 = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('I am resolved by test2');
        }, 2000);
    })
}

const test3 = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('I am resolved by test3');
        }, 4000);
    })
}

// const testAllPromise = Promise.race([test1(), test2(), test3()]);

// testAllPromise.then((data) => {
//     console.log(data);
//     return data;
// }).catch((err) => {
//     console.error(err);
// })

Promise.myRace = function(promiseArr) {
    return new Promise((resolve, reject) => {
        promiseArr.forEach((promise) => {
            Promise.resolve(promise)
            .then(resolve, reject);
        })
    })
};

const testAllPromise = Promise.myRace([test1(), test2(), test3()]);

testAllPromise.then((data) => {
    console.log(data);
    return data;
}).catch((err) => {
    console.error(err);
})