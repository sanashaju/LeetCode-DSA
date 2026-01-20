/**
 * @param {string} s
 * @param {string[]} words
 * @return {number[]}
 */
var findSubstring = function(s, words) {
    if (words.length === 0) return [];

    const wordLen = words[0].length;
    const wordCount = words.length;
    const totalLen = wordLen * wordCount;

    const freq = new Map();
    for (let w of words) {
        freq.set(w, (freq.get(w) || 0) + 1);
    }

    const result = [];

    for (let i = 0; i < wordLen; i++) {
        let left = i;
        let right = i;
        let count = 0;
        let windowMap = new Map();

        while (right + wordLen <= s.length) {
            const word = s.substring(right, right + wordLen);
            right += wordLen;

            if (freq.has(word)) {
                windowMap.set(word, (windowMap.get(word) || 0) + 1);
                count++;

                while (windowMap.get(word) > freq.get(word)) {
                    const leftWord = s.substring(left, left + wordLen);
                    windowMap.set(leftWord, windowMap.get(leftWord) - 1);
                    left += wordLen;
                    count--;
                }

                if (count === wordCount) {
                    result.push(left);
                }
            } else {
                windowMap.clear();
                count = 0;
                left = right;
            }
        }
    }

    return result;
};
