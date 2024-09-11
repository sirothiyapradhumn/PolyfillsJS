// https://leetcode.com/problems/product-of-array-except-self

var productExceptSelf = function(nums) {
    let pre = 1;
    let post = 1;
    let res = [];

    for(let i = 0; i<nums.length; i++) {
        res[i] = pre;
        pre = pre * nums[i];
    }

    for( let i = nums.length - 1; i>=0; i--) {
        res[i] = res[i] * post;
        post = post * nums[i];
    } 


    return res;
};