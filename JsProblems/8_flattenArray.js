const nestedArr = [1, [2, 3, [4, 5]], 6, [[7], [8, 9, [10, 11]]]];

// console.log(nestedArr.flat());
// console.log(nestedArr.flat(2));
// console.log(nestedArr.flat(3));
// console.log(nestedArr.flat(Infinity));

// custom flatten method
const flattenRecusive = (arr) => {
    const result = [];
    for(const item of arr) {
        if(Array.isArray(item)){
            result.push(...flattenRecusive(item));
        }else {
            result.push(item);
        }
    }

    return result;
}

flattenRecusive(nestedArr)