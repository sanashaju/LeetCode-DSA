/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
    if (s.length !== t.length) return false;

    const count = new Map();

    for (const ch of s) {
        count.set(ch, (count.get(ch) || 0) + 1);
    }

    for (const ch of t) {
        if (!count.has(ch)) return false;
        count.set(ch, count.get(ch) - 1);
        if (count.get(ch) === 0) count.delete(ch);
    }

    return count.size === 0;
};
