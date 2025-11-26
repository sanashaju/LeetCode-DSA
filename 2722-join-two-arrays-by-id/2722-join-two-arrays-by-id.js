/**
 * @param {Array} arr1
 * @param {Array} arr2
 * @return {Array}
 */
var join = function(arr1, arr2) {
    const map = {};

    for (const obj of arr1) {
        map[obj.id] = { ...obj };
    }

    for (const obj of arr2) {
        if (map[obj.id]) {
            map[obj.id] = { ...map[obj.id], ...obj };
        } else {
            map[obj.id] = { ...obj };
        }
    }

    return Object.values(map).sort((a, b) => a.id - b.id);
};
