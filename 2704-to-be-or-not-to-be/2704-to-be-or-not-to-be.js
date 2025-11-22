/**
 * @param {string} val
 * @return {Object}
 */
var expect = function(val) {
    return {
        toBe: function(v) {
            if (val === v) return true;
            throw "Not Equal";
        },
        notToBe: function(v) {
            if (val !== v) return true;
            throw "Equal";
        }
    };
};


