function myPromisePolyfill(executor) {
    let onResolve,
        onReject,
        isFullfilled = false,
        isCalled = false,
        value;
        

    function resolve(val) {
        isFullfilled = true;
        value = val;
        if(typeof onResolve === "function") {
            isCalled = true;
            onResolve(val);
        }
    }

    function reject(val) {
        isFullfilled = true;
        value = val;
        if(typeof onResolve === "function") {
            isCalled = true;
            onReject(val);
        }
    }

    this.then = function(callbackFn) {
        onResolve = callbackFn;
        if(isFullfilled && !isCalled) {
            isCalled = true;
            onResolve(value);
        }
        return this;
    }

    this.catch = function(callbackFn) {
        onReject = callbackFn;
        if(isFullfilled && !isCalled) {
            isCalled = true;
            onReject(value);
        }
        return this;
    }

    executor(resolve, reject);
}


const testPromise = new myPromisePolyfill((resolve, reject) => {
    setTimeout(()=> {
        resolve('hello after 3 sec');
    }, 3000);
});

testPromise.then((res) => {
    console.log(res);
    return res;
}).catch((err) => {
    console.error(err);
    return err;
})




// const promiseRes = Promise.resolve('Promised Resolved running');
// promiseRes.then((res) => {
//     console.log(res);
//     return res;
// })


myPromisePolyfill.resolve = (val) => {
    return new myPromisePolyfill((resolve, reject) => {
        resolve(val);
    })
}

myPromisePolyfill.reject = (val) => {
    return new myPromisePolyfill((resolve, reject) => {
        reject(val);
    })
}

const promiseRes = myPromisePolyfill.resolve('Promised Resolved running');
promiseRes.then((res) => {
    console.log(res);
    return res;
})