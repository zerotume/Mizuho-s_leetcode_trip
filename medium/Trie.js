class TrieNode {
    constructor(value, next){
        this.value = value || "";
        this.next = next || {};
    }
}


var Trie = function() {
    this.head = new TrieNode("^");
};

/**
 * @param {string} word
 * @return {void}
 */
Trie.prototype.insert = function(word) {
    let curr = this.head;
    for(let i = 0; i < word.length; i ++){
        if(curr.next[word[i]] === undefined)curr.next[word[i]] = new TrieNode(word[i])
        curr = curr.next[word[i]];
    }
    curr.next["#"] = new TrieNode("#");
};

/**
 * @param {string} word
 * @return {boolean}
 */
Trie.prototype.search = function(word) {
    let curr = this.head;
    word = word + "#";
    for(let i = 0; i < word.length; i ++){
        if(curr.next[word[i]]){
            curr = curr.next[word[i]];
        }else{
            return false;
        }
    }
    return true;
};

/**
 * @param {string} prefix
 * @return {boolean}
 */
Trie.prototype.startsWith = function(prefix) {
    let curr = this.head;
    for(let i = 0; i < prefix.length; i ++){
        if(curr.next[prefix[i]]){
            curr = curr.next[prefix[i]];
        }else{
            return false;
        }
    }
    return true;
};

/**
 * Your Trie object will be instantiated and called as such:
 * var obj = new Trie()
 * obj.insert(word)
 * var param_2 = obj.search(word)
 * var param_3 = obj.startsWith(prefix)
 */


//  Runtime: 405 ms, faster than 16.34% of JavaScript online submissions for Implement Trie (Prefix Tree).
//  Memory Usage: 69.4 MB, less than 23.44% of JavaScript online submissions for Implement Trie (Prefix Tree).
// maybe because of my "^" and "#" sign with node-value
