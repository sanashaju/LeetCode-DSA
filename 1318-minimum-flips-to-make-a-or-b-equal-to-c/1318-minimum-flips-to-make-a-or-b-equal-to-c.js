/**
 * @param {number} a
 * @param {number} b
 * @param {number} c
 * @return {number}
 */
var minFlips = function(a, b, c) {
    let flips = 0;

    while (a > 0 || b > 0 || c > 0) {
        let abit = a & 1;
        let bbit = b & 1;
        let cbit = c & 1;

        if (cbit === 0) {
            flips += abit + bbit; 
        } else {
            if (abit === 0 && bbit === 0) {
                flips += 1; 
            }
        }

        a >>= 1;
        b >>= 1;
        c >>= 1;
    }

    return flips;
};
