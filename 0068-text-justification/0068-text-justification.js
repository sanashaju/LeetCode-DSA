/**
 * @param {string[]} words
 * @param {number} maxWidth
 * @return {string[]}
 */
var fullJustify = function (words, maxWidth) {
  const result = [];
  let i = 0;

  while (i < words.length) {
    let lineLen = words[i].length;
    let j = i + 1;

    while (j < words.length && lineLen + 1 + words[j].length <= maxWidth) {
      lineLen += 1 + words[j].length;
      j++;
    }

    const wordCount = j - i;
    let line = "";

    if (j === words.length || wordCount === 1) {
      line = words[i];
      for (let k = i + 1; k < j; k++) {
        line += " " + words[k];
      }
      line += " ".repeat(maxWidth - line.length);
    } else {
      let totalChars = 0;
      for (let k = i; k < j; k++) {
        totalChars += words[k].length;
      }

      let totalSpaces = maxWidth - totalChars;
      let spaceBetween = Math.floor(totalSpaces / (wordCount - 1));
      let extraSpaces = totalSpaces % (wordCount - 1);

      for (let k = i; k < j - 1; k++) {
        line += words[k];
        line += " ".repeat(spaceBetween + (extraSpaces > 0 ? 1 : 0));
        if (extraSpaces > 0) extraSpaces--;
      }

      line += words[j - 1];
    }

    result.push(line);
    i = j;
  }

  return result;
};
