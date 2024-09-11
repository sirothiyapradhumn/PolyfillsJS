// https://leetcode.com/problems/group-anagrams

const getMapStrs = (sortedSts, strs, map = new Map()) => {
    for(let i = 0; i<sortedSts.length; i++) {
        if(map.has(sortedSts[i])) {
            map.set(sortedSts[i], [strs[i], ...map.get(sortedSts[i])])
        } else {
            map.set(sortedSts[i], [strs[i]]);
        }
    }
    return map;
};

var groupAnagrams = function(strs) {
    let res = [];
    const sortedSts = strs.map((str) => {
        return str.split("").sort().join("");
    });
    // console.log(sortedSts);
    const map = getMapStrs(sortedSts, strs);

    for (let [key, value] of map) {
        console.log(`Key: ${key}, Value: ${value}`);
        res.push(value);
    };

    return res;
};