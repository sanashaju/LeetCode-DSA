/**
 * @param {string} s
 * @return {number}
 */
var calculate = function(s) {
    let stack = [];
    let result = 0;
    let num = 0;
    let sign = 1; 

    for (let i = 0; i < s.length; i++) {
        const ch = s[i];

        if (ch >= '0' && ch <= '9') {
            num = num * 10 + (ch - '0');
        } 
        else if (ch === '+') {
            result += sign * num;
            num = 0;
            sign = 1;
        } 
        else if (ch === '-') {
            result += sign * num;
            num = 0;
            sign = -1;
        } 
        else if (ch === '(') {
            stack.push(result);
            stack.push(sign);
            result = 0;
            sign = 1;
        } 
        else if (ch === ')') {
            result += sign * num;
            num = 0;

            result *= stack.pop(); 
            result += stack.pop(); 
        }
    }

    return result + sign * num;
};
