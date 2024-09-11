// https://leetcode.com/problems/valid-anagram

var isAnagram = function(s, t) {
    const sortS = s.split("").sort().join("");
    const sortT = t.split("").sort().join("");
    console.log(sortS);
    console.log(sortT);

    return sortS === sortT;
};