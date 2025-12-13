/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findKthLargest = function(nums, k) {
    const target = nums.length - k

    function quickSelect(left, right) {
        const pivotIndex = left + Math.floor(Math.random() * (right - left + 1))
        ;[nums[pivotIndex], nums[right]] = [nums[right], nums[pivotIndex]]

        const pivot = nums[right]
        let p = left

        for (let i = left; i < right; i++) {
            if (nums[i] <= pivot) {
                ;[nums[p], nums[i]] = [nums[i], nums[p]]
                p++
            }
        }

        ;[nums[p], nums[right]] = [nums[right], nums[p]]

        if (p === target) return nums[p]
        if (p < target) return quickSelect(p + 1, right)
        return quickSelect(left, p - 1)
    }

    return quickSelect(0, nums.length - 1)
};

