/**
 * @param {number} k
 * @param {number} n
 * @return {number[][]}
 */
var combinationSum3 = function(k, n) {
    const result = [];

    const backtrack = (start, path, sum) => {
        
        if (path.length === k && sum === n) {
            result.push([...path]);
            return;
        }

       
        if (path.length > k || sum > n) return;

        for (let i = start; i <= 9; i++) {
            path.push(i);
            backtrack(i + 1, path, sum + i);
            path.pop(); 
        }
    };

    backtrack(1, [], 0);
    return result;
};
