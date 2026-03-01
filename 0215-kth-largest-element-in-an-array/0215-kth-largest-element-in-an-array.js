/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findKthLargest = function(nums, k) {
    const heap = [];

    const push = (val) => {
        heap.push(val);
        let i = heap.length - 1;
        while (i > 0) {
            let p = Math.floor((i - 1) / 2);
            if (heap[p] <= heap[i]) break;
            [heap[p], heap[i]] = [heap[i], heap[p]];
            i = p;
        }
    };

    const pop = () => {
        const top = heap[0];
        heap[0] = heap.pop();
        let i = 0;
        while (true) {
            let l = 2 * i + 1, r = 2 * i + 2, smallest = i;
            if (l < heap.length && heap[l] < heap[smallest]) smallest = l;
            if (r < heap.length && heap[r] < heap[smallest]) smallest = r;
            if (smallest === i) break;
            [heap[i], heap[smallest]] = [heap[smallest], heap[i]];
            i = smallest;
        }
        return top;
    };

    for (let num of nums) {
        push(num);
        if (heap.length > k) pop();
    }

    return heap[0];
};

