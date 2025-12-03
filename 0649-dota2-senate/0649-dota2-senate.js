/**
 * @param {string} senate
 * @return {string}
 */
var predictPartyVictory = function(senate) {
    const n = senate.length;
    const R = [];
    const D = [];

    for (let i = 0; i < n; i++) {
        if (senate[i] === 'R') R.push(i);
        else D.push(i);
    }

    while (R.length && D.length) {
        let r = R.shift();
        let d = D.shift();
        if (r < d) R.push(r + n);
        else D.push(d + n);
    }

    return R.length ? "Radiant" : "Dire";
};
