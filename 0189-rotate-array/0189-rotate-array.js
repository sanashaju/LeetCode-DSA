/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function(nums, k) {
    const n = nums.length;
    k = k % n;
    
    const result = new Array(n);
    
    for (let i = 0; i < n; i++) {
        result[(i + k) % n] = nums[i];
    }
    
    for (let i = 0; i < n; i++) {
        nums[i] = result[i];
    }
};
