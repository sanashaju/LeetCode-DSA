/**
 * @param {number[]} gas
 * @param {number[]} cost
 * @return {number}
 */
var canCompleteCircuit = function(gas, cost) {
    let totalGas = 0;
    let tank = 0;
    let start = 0;

    for (let i = 0; i < gas.length; i++) {
        const diff = gas[i] - cost[i];
        totalGas += diff;
        tank += diff;

        if (tank < 0) {
            start = i + 1;
            tank = 0;
        }
    }

    return totalGas >= 0 ? start : -1;
};
