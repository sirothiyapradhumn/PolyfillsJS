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
    return Promise.resolve('I am resolve by test3')
    // return Promise.reject('I am reject by test3')
}

// const testAllPromise = Promise.all([test1(), test2(), test3()]);

// testAllPromise.then((data) => {
//     console.log(data);
//     return data;
// }).catch((err) => {
//     console.error(err);
// })

  
Promise.polyfillAll = function (promisesArr) {
    return new Promise((resolve, reject) => {
        const result = [];
        
        if(!promisesArr.length) {
            resolve(result);
            return;
        }
    
        let pendingPromises = promisesArr.length;
        promisesArr.forEach((promise, idx) => {
            Promise.resolve(promise)
            .then((res) => {
                result[idx] = res;
                pendingPromises--;

                if(pendingPromises === 0) {
                    resolve(result);
                }
            }).catch(err => {
                reject(err);
            })
            
        });
        
    })
}

const testAllPromise = Promise.polyfillAll([test1(), test2(), test3()]);

testAllPromise.then((data) => {
    console.log(data);
    return data;
}).catch((err) => {
    console.error(err);
})
