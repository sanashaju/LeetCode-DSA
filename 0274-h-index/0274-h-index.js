/**
 * @param {number[]} citations
 * @return {number}
 */
var hIndex = function(citations) {
    const n = citations.length;
    const count = new Array(n + 1).fill(0);

    for (let c of citations) {
        if (c >= n) count[n]++;
        else count[c]++;
    }

    let papers = 0;
    for (let h = n; h >= 0; h--) {
        papers += count[h];
        if (papers >= h) return h;
    }
};
