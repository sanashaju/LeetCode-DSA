/**
 * @param {string} startGene
 * @param {string} endGene
 * @param {string[]} bank
 * @return {number}
 */
var minMutation = function(startGene, endGene, bank) {
    
    let bankSet = new Set(bank);
    if (!bankSet.has(endGene)) return -1;

    let queue = [[startGene, 0]];
    let visited = new Set();
    visited.add(startGene);

    const genes = ['A', 'C', 'G', 'T'];

    while (queue.length > 0) {
        let [current, steps] = queue.shift();

        if (current === endGene) {
            return steps;
        }

        for (let i = 0; i < current.length; i++) {
            for (let ch of genes) {
                if (ch === current[i]) continue;

                let mutated =
                    current.slice(0, i) +
                    ch +
                    current.slice(i + 1);

                if (bankSet.has(mutated) && !visited.has(mutated)) {
                    visited.add(mutated);
                    queue.push([mutated, steps + 1]);
                }
            }
        }
    }

    return -1;
};
