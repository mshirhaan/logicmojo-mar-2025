class Solution {
    search(pat, txt) {
        // code here
        return kmpSearch(txt, pat)
    }
}


var kmpSearch = function(haystack, needle) {
    
    let table = formTable(needle)
    let result = []

    let i = 0;
    let j = 0;

    while(i < haystack.length) {
        if(haystack[i] == needle[j]) {
            i++;
            j++;

            if(j == needle.length) {
                result.push(i - needle.length)

                j = table[j-1]
            }
        } else {
            if(j!=0) {
                j = table[j-1]
            } else {
                i++;
            }
        }
    }
    return result
};

function formTable(needle) {
    const len = needle.length;
    let table = [0]

    let i = 0; // length of previous longest prefix suffix
    let j = 1; // current position

    while (j < len) {
        if (needle[i] === needle[j]) {
            i++;
            table[j] = i;
            j++;
        } else {
            if (i !== 0) {
                i = table[i - 1]; // fallback
            } else {
                table[j] = 0;
                j++;
            }
        }
    }

    return table;
}
