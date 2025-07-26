/**
 * @param {string} text1
 * @param {string} text2
 * @return {number}
 */
var longestCommonSubsequence = function(s1, s2) {
   
    return helper(0, 0, {})

    function helper(i, j, map) {
        
        if(i == s1.length || j == s2.length) {
            return 0;
        }

        if(map[i+','+j] != undefined) {
            return map[i+','+j]
        }

        if(s1[i] == s2[j]) {
            map[i+','+j] = 1 + helper(i+1, j+1, map);
            return map[i+','+j];
        } else {
            map[i+','+j] = Math.max(helper(i+1, j, map), helper(i, j+1, map));
            return map[i+','+j]
        }
    }
}

