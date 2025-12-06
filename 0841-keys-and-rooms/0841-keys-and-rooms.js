/**
 * @param {number[][]} rooms
 * @return {boolean}
 */
var canVisitAllRooms = function(rooms) {
    const visited = new Array(rooms.length).fill(false);
    const stack = [0];
    visited[0] = true;

    while (stack.length) {
        const room = stack.pop();
        for (let key of rooms[room]) {
            if (!visited[key]) {
                visited[key] = true;
                stack.push(key);
            }
        }
    }

    return visited.every(v => v);
};
