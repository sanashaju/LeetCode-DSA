/**
 * @param {string} s
 * @param {string} t
 * @return {string}
 */
/**
 * @param {string} s
 * @param {string} t
 * @return {string}
 */
var minWindow = function(s, t) {
    if (t.length > s.length) return "";

    const need = new Map();
    for (let ch of t) {
        need.set(ch, (need.get(ch) || 0) + 1);
    }

    let have = 0;                    
    let required = need.size;       

    const window = new Map();

    let left = 0;
    let minLen = Infinity;
    let start = 0;

    for (let right = 0; right < s.length; right++) {
        let char = s[right];
        window.set(char, (window.get(char) || 0) + 1);

        if (need.has(char) && window.get(char) === need.get(char)) {
            have++;
        }

        while (have === required) {
            if (right - left + 1 < minLen) {
                minLen = right - left + 1;
                start = left;
            }

            let leftChar = s[left];
            window.set(leftChar, window.get(leftChar) - 1);

            if (need.has(leftChar) && window.get(leftChar) < need.get(leftChar)) {
                have--;
            }
            left++;
        }
    }

    return minLen === Infinity ? "" : s.substring(start, start + minLen);
};
