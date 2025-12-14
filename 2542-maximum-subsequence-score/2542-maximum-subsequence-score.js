/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @param {number} k
 * @return {number}
 */
var maxScore = function(nums1, nums2, k) {
    const n = nums1.length;

    const pairs = [];
    for (let i = 0; i < n; i++) {
        pairs.push([nums2[i], nums1[i]]);
    }

    pairs.sort((a, b) => b[0] - a[0]);

    const heap = [];
    let sum = 0;
    let maxScore = 0;

    const push = (val) => {
        heap.push(val);
        let i = heap.length - 1;
        while (i > 0) {
            let p = (i - 1) >> 1;
            if (heap[p] <= heap[i]) break;
            [heap[p], heap[i]] = [heap[i], heap[p]];
            i = p;
        }
    };

    const pop = () => {
        const top = heap[0];
        const last = heap.pop();
        if (heap.length > 0) {
            heap[0] = last;
            let i = 0;
            while (true) {
                let l = 2 * i + 1;
                let r = 2 * i + 2;
                let smallest = i;

                if (l < heap.length && heap[l] < heap[smallest]) smallest = l;
                if (r < heap.length && heap[r] < heap[smallest]) smallest = r;
                if (smallest === i) break;

                [heap[i], heap[smallest]] = [heap[smallest], heap[i]];
                i = smallest;
            }
        }
        return top;
    };

    for (const [min2, val1] of pairs) {
        push(val1);
        sum += val1;

        if (heap.length > k) {
            sum -= pop();
        }

        if (heap.length === k) {
            maxScore = Math.max(maxScore, sum * min2);
        }
    }

    return maxScore;
};
