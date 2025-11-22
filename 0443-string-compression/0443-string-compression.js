/**
 * @param {character[]} chars
 * @return {number}
 */
var compress = function(chars) {
    let write = 0;   
    let i = 0;       

    while (i < chars.length) {
        let char = chars[i];
        let count = 0;

       
        while (i < chars.length && chars[i] === char) {
            i++;
            count++;
        }

        
        chars[write++] = char;

        
        if (count > 1) {
            for (let digit of String(count)) {
                chars[write++] = digit;
            }
        }
    }

    return write;
};

