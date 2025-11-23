/**
 * @param {number[]} nums
 * @return {void}
 */
var moveZeroes = function(nums) {
    let insertPos = 0;
    
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] !== 0) {
            nums[insertPos] = nums[i];
            insertPos++;
        }
    }

    while (insertPos < nums.length) {
        nums[insertPos] = 0;
        insertPos++;
    }
};
