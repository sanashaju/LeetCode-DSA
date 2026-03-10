/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubarraySumCircular = function(nums) {
    let totalSum = 0;
    
    let maxSum = nums[0];
    let currentMax = 0;

    let minSum = nums[0];
    let currentMin = 0;

    for (let num of nums) {
        currentMax = Math.max(num, currentMax + num);
        maxSum = Math.max(maxSum, currentMax);

        currentMin = Math.min(num, currentMin + num);
        minSum = Math.min(minSum, currentMin);

        totalSum += num;
    }

    if (totalSum === minSum) return maxSum;

    return Math.max(maxSum, totalSum - minSum);
};