class Node {
  isWord = false;
  bucket = new Array(26);
}

class Trie {
  root = new Node();

  insert(word) {
    let curr = this.root;
    for (let letter of word) {
      let index = letter.charCodeAt() - "a".charCodeAt();
      if (curr.bucket[index] == undefined) {
        curr.bucket[index] = new Node();
      }
      curr = curr.bucket[index];
    }
    curr.isWord = true;
  }

  search(word) {
    let curr = this.root;
    for (let letter of word) {
      let index = letter.charCodeAt() - "a".charCodeAt();
      if (curr.bucket[index] == undefined) {
        return false;
      }
      curr = curr.bucket[index];
    }
    return curr.isWord;
  }

  startsWith(prefix) {
    let curr = this.root;
    for (let letter of prefix) {
      let index = letter.charCodeAt() - "a".charCodeAt();
      if (curr.bucket[index] == undefined) {
        return false;
      }
      curr = curr.bucket[index];
    }
    return curr;
  }

  getAllWordsWithPrefix(prefix) {
    let node = this.startsWith(prefix);
    if (!node) return [];

    let words = [];
    if (node.isWord) {
      words.push(prefix);
    }
    helper(prefix, node);

    function helper(prefix, node) {
      for (let i = 0; i < 26; i++) {
        if (node.bucket[i]) {
          let letter = String.fromCharCode(i + "a".charCodeAt());
          if (node.bucket[i].isWord) {
            words.push(prefix + letter);
          }
          helper(prefix + letter, node.bucket[i]);
        }
      }
    }
    return words;
  }
}
