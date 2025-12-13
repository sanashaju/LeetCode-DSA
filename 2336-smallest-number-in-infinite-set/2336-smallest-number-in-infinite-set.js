var SmallestInfiniteSet = function() {
    this.current = 1
    this.heap = []
    this.set = new Set()
};

/**
 * @return {number}
 */
SmallestInfiniteSet.prototype.popSmallest = function() {
    if (this.heap.length > 0) {
        const smallest = this.heap.shift()
        this.set.delete(smallest)
        return smallest
    }
    return this.current++
};

/** 
 * @param {number} num
 * @return {void}
 */
SmallestInfiniteSet.prototype.addBack = function(num) {
    if (num < this.current && !this.set.has(num)) {
        this.heap.push(num)
        this.heap.sort((a, b) => a - b)
        this.set.add(num)
    }
};
/** 
 * Your SmallestInfiniteSet object will be instantiated and called as such:
 * var obj = new SmallestInfiniteSet()
 * var param_1 = obj.popSmallest()
 * obj.addBack(num)
 */