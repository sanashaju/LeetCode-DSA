var RandomizedSet = function() {
    this.nums = [];
    this.map = new Map();
};

/** 
 * @param {number} val
 * @return {boolean}
 */
RandomizedSet.prototype.insert = function(val) {
    if (this.map.has(val)) return false;

    this.map.set(val, this.nums.length);
    this.nums.push(val);
    return true;
};

/** 
 * @param {number} val
 * @return {boolean}
 */
RandomizedSet.prototype.remove = function(val) {
    if (!this.map.has(val)) return false;

    const index = this.map.get(val);
    const lastVal = this.nums[this.nums.length - 1];

    // Move last element to the removed spot
    this.nums[index] = lastVal;
    this.map.set(lastVal, index);

    // Remove last element
    this.nums.pop();
    this.map.delete(val);

    return true;
};

/**
 * @return {number}
 */
RandomizedSet.prototype.getRandom = function() {
    const randomIndex = Math.floor(Math.random() * this.nums.length);
    return this.nums[randomIndex];
};
