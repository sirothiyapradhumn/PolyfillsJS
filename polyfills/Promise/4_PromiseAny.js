const test1 = () => {
    return new Promise((resolve, reject) => {
        // setTimeout(() => {
        //     resolve('I am resolved by test1');
        // }, 2000);
        
        resolve('I am resolved by test1');
    })
}

const test2 = () => {
    return new Promise((resolve, reject) => {
        resolve('I am resolved by test2');
    })
}

const test3 = () => {
    // return Promise.resolve('I am resolve by test3')
    return Promise.reject('I am reject by test3')
}

// const testAllPromise = Promise.any([test1(), test2(), test3()]);

// testAllPromise.then((data) => {
//     console.log(data);
//     return data;
// }).catch((err) => {
//     console.error(err);
// })

Promise.myAny = function(promiseArr) {
    return new Promise((resolve, reject) => {
        let pendingPromise = promiseArr.length;
        promiseArr.forEach((promise, idx) => {
            Promise.resolve(promise)
            .then((res) => {
                resolve(res);
                pendingPromise--;
            })
            .catch((err) => {
                pendingPromise--;
                if(pendingPromise === 0) {
                    return reject(new AggregateError('All promises were rejected'));
                }
            })
        })
    })
};

const testAllPromise = Promise.myAny([test1(), test2(), test3()]);

testAllPromise.then((data) => {
    console.log(data);
    return data;
}).catch((err) => {
    console.error(err);
})