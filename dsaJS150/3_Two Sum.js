// https://leetcode.com/problems/two-sum

var twoSum = function(nums, target) {
    const numsSet = new Set();
    for(let i = 0; i<nums.length; i++) {
        const compliment = target - nums[i];
        if(numsSet.has(compliment)) {
            const complimentIdx = nums.indexOf(compliment);
            if(complimentIdx > -1) {
                return [complimentIdx, i];
            }
        } else {
            numsSet.add(nums[i]);
        }
    }
    return [];
};