/**
 * @param {Object|Array} obj
 * @return {Object|Array}
 */
var compactObject = function(obj) {

    if (Array.isArray(obj)) {
        const result = [];

        for (const item of obj) {
            if (!item) continue; 

            if (typeof item === "object") { 
                const compacted = compactObject(item);
                result.push(compacted);
            } else {
                result.push(item);
            }
        }
        return result;
    }

    const result = {};

    for (const key in obj) {
        const value = obj[key];
        if (!value) continue; 

        if (typeof value === "object") {
            const compacted = compactObject(value);
            result[key] = compacted;
        } else {
            result[key] = value;
        }
    }

    return result;
};
