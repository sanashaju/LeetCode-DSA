/**
 * @param {number} x
 * @return {number}
 */
var mySqrt = function(x) {
    if (x < 2) return x; // 0 and 1 are edge cases

    let left = 1, right = x, ans = 0;

    while (left <= right) {
        let mid = Math.floor((left + right) / 2);
        if (mid * mid === x) return mid;
        if (mid * mid < x) {
            ans = mid;      
            left = mid + 1;  
        } else {
            right = mid - 1;
        }
    }

    return ans;  
};