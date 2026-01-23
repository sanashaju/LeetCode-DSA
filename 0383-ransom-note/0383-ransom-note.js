/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
var canConstruct = function(ransomNote, magazine) {
    const freq = new Array(26).fill(0);

    for (let ch of magazine) {
        freq[ch.charCodeAt(0) - 97]++;
    }

    for (let ch of ransomNote) {
        const idx = ch.charCodeAt(0) - 97;
        freq[idx]--;
        if (freq[idx] < 0) return false;
    }

    return true;
};
