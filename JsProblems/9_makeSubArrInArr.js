const arr = [1,2,3,4,5,6,7,8,9,10,11]
const edgeCase = (res, arr, leftLength) => {
    const nextSubArr = arr.slice(-leftLength);
    return [...res, nextSubArr];
}

const createSubArr = (arr, sub) => {
    const res = [];
    let subval = sub;
    let subArr = [];

    arr.forEach((ele) => {
        if(subval === 0) {
            res.push(subArr);
            subArr = [];
            subval = sub;
        }
        subArr.push(ele);
        subval--;
    });
    
    return res.flat(1).length === arr.length ? res : edgeCase(res, arr, arr.length - res.flat(1).length);
}

console.log(createSubArr(arr, 4));



const createSubArr1 = (arr, sub) => {
    const res = [];
    arr.forEach((ele, idx) => {
        const checkSublen = Math.floor(idx / sub);
        if (!res[checkSublen]) {
            res[checkSublen] = [];
        }
        res[checkSublen].push(arr[idx]);
    });

    return res;
};

createSubArr1(arr, 3)