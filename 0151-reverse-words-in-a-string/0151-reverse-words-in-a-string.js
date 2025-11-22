/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function(s) {
    
    const words = s.trim().split(/\s+/);

    return words.reverse().join(' ');
};
