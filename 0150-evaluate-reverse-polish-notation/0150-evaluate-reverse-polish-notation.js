/**
 * @param {string[]} tokens
 * @return {number}
 */
var evalRPN = function(tokens) {
    const stack = [];

    for (let token of tokens) {
        if (token === "+" || token === "-" || token === "*" || token === "/") {
            const b = stack.pop(); 
            const a = stack.pop(); 

            let result;
            if (token === "+") result = a + b;
            else if (token === "-") result = a - b;
            else if (token === "*") result = a * b;
            else {
                result = Math.trunc(a / b);
            }

            stack.push(result);
        } else {
            stack.push(Number(token));
        }
    }

    return stack[0];
};
