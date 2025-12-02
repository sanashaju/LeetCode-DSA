/**
 * @param {number[]} asteroids
 * @return {number[]}
 */
var asteroidCollision = function(asteroids) {
    const stack = [];

    for (let a of asteroids) {
        let alive = true;

        while (alive && a < 0 && stack.length > 0 && stack[stack.length - 1] > 0) {
            let top = stack[stack.length - 1];

            if (top < -a) {
                stack.pop();        
            } else if (top === -a) {
                stack.pop();        
                alive = false;
            } else {
                alive = false;   
            }
        }

        if (alive) stack.push(a);
    }

    return stack;
};
