// create promise to resolve in 3 sec
const promise3sec = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('wellcome to JS')
    }, 3000)
});

promise3sec.then((data) => {
    console.log(data);
});

//promise chaining

function one() {
    return Promise.resolve(1);
}

function two() {
    return Promise.resolve(2);
}

function three() {
    return Promise.resolve(3);
}

async function test() {
    try {
        // sequentially calling api one after another
        const testOne = await one();
        const testTwo = await two();
        const testThree = await three();

        const output = testOne + testTwo + testThree;
        console.log('response is', output);
    } catch (e) {
        console.log(e);
    }
}

test();

async function test1() {
    try {
        // calling api parallely
        const output = await Promise.allSettled([one(), two(), three()]);
        console.log('response for parallely calling', output);
    } catch (e) {
        console.log(e);
    }
}

test1();