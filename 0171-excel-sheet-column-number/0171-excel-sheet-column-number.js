/**
 * @param {string} columnTitle
 * @return {number}
 */
var titleToNumber = function(columnTitle) {
     let result = 0;

    for (let char of columnTitle) {
        result = result * 26 + (char.charCodeAt(0) - 64);
    }

    return result;
};