// https://leetcode.com/problems/top-k-frequent-elements

var topKFrequent = function(nums, k) {
    let mapNums = {};
    let res = [];

   for( const i of nums) {
    if(mapNums[i]) {
        mapNums[i]++;
    } else {
        mapNums[i] = 1;
    }
   };

    const tempArr = Object.keys(mapNums).map((ele) => [Number(ele), mapNums[ele]]);

    tempArr.sort((a, b) => b[1]-a[1]);

    console.log(tempArr);

    for(let i = 0; i<k; i++) {
        res.push(tempArr[i][0]);
    }

    return res;
};