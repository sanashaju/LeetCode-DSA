/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isIsomorphic = function(s, t) {
    const mapS = {};
    const mapT = {};

    for (let i = 0; i < s.length; i++) {
        if (mapS[s[i]] !== mapT[t[i]]) return false;
        mapS[s[i]] = i;
        mapT[t[i]] = i;
    }
    return true;
};
