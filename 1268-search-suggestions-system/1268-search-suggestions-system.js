/**
 * @param {string[]} products
 * @param {string} searchWord
 * @return {string[][]}
 */
var suggestedProducts = function(products, searchWord) {
  products.sort(); 
  let result = [];
  let prefix = "";
  let start = 0;

  for (let ch of searchWord) {
    prefix += ch;

    
    while (
      start < products.length &&
      products[start].slice(0, prefix.length) < prefix
    ) {
      start++;
    }

    let suggestions = [];
    for (let i = start; i < Math.min(start + 3, products.length); i++) {
      if (products[i].startsWith(prefix)) {
        suggestions.push(products[i]);
      }
    }

    result.push(suggestions);
  }

  return result;
};
