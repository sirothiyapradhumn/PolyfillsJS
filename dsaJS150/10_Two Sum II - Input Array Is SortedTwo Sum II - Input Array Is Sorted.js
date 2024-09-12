// https://leetcode.com/problems/two-sum-ii-input-array-is-sorted/

var twoSum = function(numbers, target) {
    let [left, right] = [0, numbers.length-1];

    while(left < right) {
        const sum = numbers[right] + numbers[left];
        if(sum === target) {
            return [left+1, right+1];
        } else if(sum > target) {
            right--;
        } else {
            left++;
        }
    }
};