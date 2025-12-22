var Trie = function () {
  this.children = {};
  this.isEnd = false;
};

/** 
 * @param {string} word
 * @return {void}
 */
Trie.prototype.insert = function (word) {
  let node = this;

  for (let ch of word) {
    if (!node.children[ch]) {
      node.children[ch] = new Trie();
    }
    node = node.children[ch];
  }

  node.isEnd = true;
};

/** 
 * @param {string} word
 * @return {boolean}
 */
Trie.prototype.search = function (word) {
  let node = this;

  for (let ch of word) {
    if (!node.children[ch]) return false;
    node = node.children[ch];
  }

  return node.isEnd === true;
};

/** 
 * @param {string} prefix
 * @return {boolean}
 */
Trie.prototype.startsWith = function (prefix) {
  let node = this;

  for (let ch of prefix) {
    if (!node.children[ch]) return false;
    node = node.children[ch];
  }

  return true;
};
