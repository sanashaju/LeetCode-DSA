/**
 * @param {string} s
 * @return {string}
 */
var decodeString = function(s) {
    const numStack = [];
    const strStack = [];
    let currNum = 0;
    let currStr = "";

    for (let ch of s) {
        if (!isNaN(ch)) {
            currNum = currNum * 10 + Number(ch);  
        } 
        else if (ch === "[") {
            numStack.push(currNum);
            strStack.push(currStr);
            currNum = 0;
            currStr = "";
        } 
        else if (ch === "]") {
            let repeatTimes = numStack.pop();
            let prevStr = strStack.pop();
            currStr = prevStr + currStr.repeat(repeatTimes);
        } 
        else {
            currStr += ch;
        }
    }

    return currStr;
};
