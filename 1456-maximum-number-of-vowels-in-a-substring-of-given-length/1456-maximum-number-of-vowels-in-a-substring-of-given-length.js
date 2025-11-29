/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var maxVowels = function(s, k) {
    const vowels = new Set(['a', 'e', 'i', 'o', 'u']);
    
    let count = 0;
    
    for (let i = 0; i < k; i++) {
        if (vowels.has(s[i])) count++;
    }
    
    let maxCount = count;
    
    for (let i = k; i < s.length; i++) {
        if (vowels.has(s[i])) count++;       
        if (vowels.has(s[i - k])) count--;   
        
        maxCount = Math.max(maxCount, count);
        
        if (maxCount === k) return k;
    }
    
    return maxCount;
};
