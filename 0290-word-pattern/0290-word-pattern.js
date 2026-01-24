/**
 * @param {string} pattern
 * @param {string} s
 * @return {boolean}
 */
var wordPattern = function(pattern, s) {
    const words = s.split(" ");
    if (pattern.length !== words.length) return false;

    const charToWord = new Map();
    const wordToChar = new Map();

    for (let i = 0; i < pattern.length; i++) {
        const ch = pattern[i];
        const word = words[i];

        if (charToWord.has(ch)) {
            if (charToWord.get(ch) !== word) return false;
        } else {
            charToWord.set(ch, word);
        }

        if (wordToChar.has(word)) {
            if (wordToChar.get(word) !== ch) return false;
        } else {
            wordToChar.set(word, ch);
        }
    }

    return true;
};
