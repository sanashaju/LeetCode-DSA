/**
 * @param {number[]} costs
 * @param {number} k
 * @param {number} candidates
 * @return {number}
 */
var totalCost = function(costs, k, candidates) {
    const n = costs.length;
    let l = 0, r = n - 1;
    let ans = 0;

    const left = [];
    const right = [];

    const push = (heap, val) => {
        heap.push(val);
        let i = heap.length - 1;
        while (i > 0) {
            let p = (i - 1) >> 1;
            if (heap[p] <= heap[i]) break;
            [heap[p], heap[i]] = [heap[i], heap[p]];
            i = p;
        }
    };

    const pop = (heap) => {
        const top = heap[0];
        const last = heap.pop();
        if (heap.length) {
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

    while (l <= r && left.length < candidates) {
        push(left, costs[l++]);
    }

    while (l <= r && right.length < candidates) {
        push(right, costs[r--]);
    }

    for (let i = 0; i < k; i++) {
        let leftMin = left.length ? left[0] : Infinity;
        let rightMin = right.length ? right[0] : Infinity;

        if (leftMin <= rightMin) {
            ans += pop(left);
            if (l <= r) push(left, costs[l++]);
        } else {
            ans += pop(right);
            if (l <= r) push(right, costs[r--]);
        }
    }

    return ans;
};
