/**
 * @param {number[]} arr
 * @return {boolean}
 */
var uniqueOccurrences = function(arr) {
    const freq = new Map();
    for (let n of arr) freq.set(n, (freq.get(n) || 0) + 1);

    const seen = new Set();
    for (let c of freq.values()) {
        if (seen.has(c)) return false;
        seen.add(c);
    }

    return true;
};
