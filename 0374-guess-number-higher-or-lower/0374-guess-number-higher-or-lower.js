/**
 * @param {number} n
 * @return {number}
 */
var guessNumber = function(n) {
    let left = 1;
    let right = n;

    while (left <= right) {
        const mid = left + Math.floor((right - left) / 2);
        const res = guess(mid);

        if (res === 0) return mid;
        if (res === -1) right = mid - 1;
        else left = mid + 1;
    }
};

