// https://leetcode.com/problems/longest-consecutive-sequence

var longestConsecutive = function(nums) {
    let maxScore = 0;
    const numSet = new Set(nums);

    for(const num of [...numSet]) {
        const preVal = num - 1;
        if(numSet.has(preVal)) continue;
        let [ currVal, score ] = [num, 1];
        const isStreak = () => numSet.has(currVal + 1);
        while(isStreak()) {
            currVal++;
            score++;
        };

        maxScore = Math.max(maxScore, score);
    }

    return maxScore;
};