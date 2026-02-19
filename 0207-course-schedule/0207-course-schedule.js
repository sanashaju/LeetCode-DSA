/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {boolean}
 */
var canFinish = function(numCourses, prerequisites) {
    
    let graph = new Array(numCourses).fill(0).map(() => []);
    let inDegree = new Array(numCourses).fill(0);

    for (let [a, b] of prerequisites) {
        graph[b].push(a);   
        inDegree[a]++;     
    }

    let queue = [];
    for (let i = 0; i < numCourses; i++) {
        if (inDegree[i] === 0) {
            queue.push(i);
        }
    }

    let completed = 0;

    while (queue.length > 0) {
        let course = queue.shift();
        completed++;

        for (let neighbor of graph[course]) {
            inDegree[neighbor]--;
            if (inDegree[neighbor] === 0) {
                queue.push(neighbor);
            }
        }
    }

    return completed === numCourses;
};
