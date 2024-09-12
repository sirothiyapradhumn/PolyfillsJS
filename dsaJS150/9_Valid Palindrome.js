// https://leetcode.com/problems/valid-palindrome

var isPalindrome = function(s) {
    if (s.length <= 1) return true;
    let [left, right] = [0, s.length-1];
    while(left < right) {
        const [leftChar, rightChar] = [s[left], s[right]];
        if(!/[a-zA-Z0-9]/.test(leftChar)) {
            left++;
        } else if(!/[a-zA-Z0-9]/.test(rightChar)) {
            right--;
        } else {
            if(leftChar.toLowerCase() !== rightChar.toLowerCase()) {
                return false;
            }
            left++;
            right--;
        }
    }

    return true;
};