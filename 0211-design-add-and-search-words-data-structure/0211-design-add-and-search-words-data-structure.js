var WordDictionary = function() {
    this.root = {};
};

/** 
 * @param {string} word
 * @return {void}
 */
WordDictionary.prototype.addWord = function(word) {
    let node = this.root;

    for (let char of word) {
        if (!node[char]) {
            node[char] = {};
        }
        node = node[char];
    }

    node.isEnd = true;
};

/** 
 * @param {string} word
 * @return {boolean}
 */
WordDictionary.prototype.search = function(word) {
    
    const dfs = (index, node) => {
        if (index === word.length) {
            return node.isEnd === true;
        }

        let char = word[index];

        if (char === ".") {
            for (let key in node) {
                if (key !== "isEnd" && dfs(index + 1, node[key])) {
                    return true;
                }
            }
            return false;
        } else {
            if (!node[char]) return false;
            return dfs(index + 1, node[char]);
        }
    };

    return dfs(0, this.root);
};

/** 
 * Your WordDictionary object will be instantiated and called as such:
 * var obj = new WordDictionary()
 * obj.addWord(word)
 * var param_2 = obj.search(word)
 */