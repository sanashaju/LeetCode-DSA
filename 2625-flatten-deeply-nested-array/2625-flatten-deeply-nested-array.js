/**
 * @param {Array} arr
 * @param {number} n
 * @return {Array}
 */
var flat = function (arr, n) {
    const result = [];

    function helper(current, depth) {
        for (let item of current) {
            if (Array.isArray(item) && depth < n) {
                helper(item, depth + 1);
            } else {
                result.push(item);
            }
        }
    }

    helper(arr, 0);
    return result;
};
